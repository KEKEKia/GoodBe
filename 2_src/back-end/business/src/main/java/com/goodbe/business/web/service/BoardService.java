package com.goodbe.business.web.service;

import com.goodbe.business.domain.board.Comment;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.board.PostLike;
import com.goodbe.business.domain.file.FileStore;
import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.dto.board.comment.CommentUpdateRequest;
import com.goodbe.business.web.dto.board.comment.CommentWriteRequest;
import com.goodbe.business.web.dto.board.post.PostUpdateRequest;
import com.goodbe.business.web.dto.board.post.PostWriteRequest;
import com.goodbe.business.web.repository.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriUtils;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class BoardService {

    private final BoardRepository boardRepository;
    private final CommentRepository commentRepository;
    private final PostLikeRepository postLikeRepository;
    private final MemberRepository memberRepository;
    private final UploadFileRepository uploadFileRepository;
    private final FileStore fileStore;

    WebClient client = WebClient.builder()
            .baseUrl("http://localhost:8082") // 인증 서버(로컬)
            .baseUrl("3.38.102.133:8083") // 인증 서버(EC2)
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)// 기본 해더
            .build();

    @Transactional(readOnly = true)
    public Page<Post> postList(Pageable pageable){
        return boardRepository.findAll(pageable);
    }

    // 게시글 작성
    public Long writePost(List<MultipartFile> imageFiles, MultipartFile singleAttachFile, PostWriteRequest request,Member member) throws IOException {
        request.setMember(member);
        request.setNickname(member.getNickname());

        List<UploadFile> storeImageFiles=null;
        UploadFile attachFile = null;

        //todo: 리팩토링 필요...
        if(imageFiles != null) {
            storeImageFiles = fileStore.storeFiles(imageFiles);
            uploadFileRepository.saveAll(storeImageFiles);
            request.setFiles(storeImageFiles);
        }

        if(singleAttachFile != null) {
            attachFile = fileStore.storeFile(singleAttachFile);
            request.setAttachFile(attachFile);
            uploadFileRepository.save(attachFile);
        }
        Long id=boardRepository.save(request.toEntity()).getId();
        Post post=boardRepository.findById(id).get();

        if(imageFiles != null){
            for(UploadFile file:storeImageFiles){
                file.setPost(post);
            }
        }
        if(singleAttachFile != null){
            attachFile.setPost(post);
        }

        return id;
    }

    // 댓글 작성
    public void writeComment(Long postId, CommentWriteRequest request) {
        Member member=memberRepository.findById(1L).get(); // ⭑⭑⭑임시로 설정한 유저이기 때문에 나중에 삭제해야 함⭑⭑⭑
        request.setMember(member);
        request.setPost(boardRepository.findById(postId).get());
        commentRepository.save(request.toEntity());
    }
    public void updateComment(Long postId,Long commentId, CommentUpdateRequest request) {
        Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new IllegalArgumentException("해당 댓글이 없습니다. id="+commentId));
        comment.update(request.getContent());
    }


    public void likePost(Long memberId, Long postId) throws Exception {

        postLikeRepository.save(new PostLike(memberRepository.findById(memberId).get(),boardRepository.findById(postId).get()));
        boardRepository.findById(postId).get().like();
    }

    public void unlikePost(Long memberId, Long postId) throws Exception {
        PostLike like=postLikeRepository.findPostLikeByMemberIdAndPostId(memberId,postId);
        postLikeRepository.delete(like);
        boardRepository.findById(like.getPost().getId()).get().likeCancel();
    }

    public boolean isLike(Long memberId, Long postId) throws Exception {
        if (postLikeRepository.findPostLikeByMemberIdAndPostId(memberId, postId) != null){ // 이미 좋아요를 했으면 취소
            return true;
        }
        return false;
    }

    public ResponseEntity<Resource> downloadAttach(Long postId)
            throws MalformedURLException {
        Post post = boardRepository.findById(postId).get();
        String storeFileName = post.getAttachFile().getStoreFileName();
        String uploadFileName = post.getAttachFile().getUploadFileName();
        UrlResource resource = new UrlResource("file:" + fileStore.getFullPath(storeFileName));
        log.info("uploadFileName={}", uploadFileName);
        String encodedUploadFileName = UriUtils.encode(uploadFileName, StandardCharsets.UTF_8);
        String contentDisposition = "attachment; filename=\"" + encodedUploadFileName + "\"";
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, contentDisposition)
                .body(resource);
    }

    public Post postDetail(Long postId){
        Post post=boardRepository.findById(postId)
                .orElseThrow(() -> new IllegalArgumentException("해당하는 게시글을 찾을 수 없습니다. ID: " + postId));
//        log.info("post member = {}",post.getMember().getNickname());
//        Optional<Member> member=memberRepository.findById(post.getMember().getId());
        post.viewPost(); // 조회수 1 증가
        return post;
    }

    public Long updatePost(Long postId, List<MultipartFile> imageFiles, MultipartFile singleAttachFile, PostUpdateRequest request) throws IOException{
        Post post = boardRepository.findById(postId).orElseThrow(()-> new IllegalArgumentException("해당 게시글이 없습니다. id="+postId));

        // 원래 올린 파일들은 삭제
        List<UploadFile> uploadFiles= uploadFileRepository.findByPostId(postId);
        for (UploadFile file:uploadFiles){
            fileStore.deleteFile(file.getStoreFileName());
        }

        if(imageFiles != null){
            List<UploadFile> storeImageFiles = fileStore.storeFiles(imageFiles);
            uploadFileRepository.saveAll(storeImageFiles);
            request.setFiles(storeImageFiles);
            for(UploadFile file:storeImageFiles){
                file.setPost(post);
            }
        }
        if(singleAttachFile != null){
            UploadFile attachFile = fileStore.storeFile(singleAttachFile);
            request.setAttachFile(attachFile);
            attachFile.setPost(post);
            uploadFileRepository.save(attachFile);
        }

        post.update(request.getBoardType(),request.getTitle(),request.getContent(),request.getFiles(),request.getAttachFile());

        return postId;
    }
    public void deletePost(@PathVariable Long postId) {
        //todo: 권한 체크
        Post post = boardRepository.findById(postId).orElseThrow(()-> new IllegalArgumentException("삭제할 게시글이 없습니다. id="+postId));
        List<UploadFile> uploadFiles= uploadFileRepository.findByPostId(postId);
        for (UploadFile file:uploadFiles){
            fileStore.deleteFile(file.getStoreFileName());
        }
        boardRepository.delete(post);

    }

    public void deleteComment(@PathVariable Long commentId) {
        //todo: 권한 체크
        Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new IllegalArgumentException("삭제할 댓글이 없습니다. id="+commentId));
        commentRepository.delete(comment);

    }


    private String resolveToken(HttpServletRequest request){
        String bearerToken=request.getHeader("Authorization");
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer")){
            return bearerToken.substring(7);
        }
        return null;
    }

}
