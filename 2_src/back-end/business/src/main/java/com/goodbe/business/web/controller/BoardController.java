package com.goodbe.business.web.controller;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.file.FileStore;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.exception.AccessDeniedException;
import com.goodbe.business.web.dto.board.comment.CommentUpdateRequest;
import com.goodbe.business.web.dto.board.comment.CommentWriteRequest;
import com.goodbe.business.web.dto.board.post.PostDetailResponse;
import com.goodbe.business.web.dto.board.post.PostUpdateRequest;
import com.goodbe.business.web.dto.board.post.PostWriteRequest;
import com.goodbe.business.web.dto.board.post.PostsResponse;
import com.goodbe.business.web.service.AuthService;
import com.goodbe.business.web.service.BoardService;
import com.goodbe.business.web.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

import static java.util.stream.Collectors.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/board")
@Tag(name = "Board", description = "게시판 API Document")
public class BoardController {

    private final BoardService boardService;
    private final FileStore fileStore;
    private final AuthService authService;
    private final MemberService memberService;


    @GetMapping("")
    @Operation(summary = "[GET] 게시판 페이지", description = "페이징 처리하여 게시글 목록을 띄움")
    public List<PostsResponse> postList(@PageableDefault(sort = "id", size = 10, direction = Sort.Direction.DESC) Pageable pageable){
        Page<Post> posts=boardService.postList(pageable);
        return posts.stream().map(PostsResponse::new).collect(toList());
    }
    @GetMapping("/{postId}")
    @Operation(summary = "[GET] 게시글 보기", description = "리스트에서 클릭하면 상세보기로 이동")
    public PostDetailResponse postDetail(@PathVariable Long postId){
        log.info("{}",postId);
        Post post=boardService.postDetail(postId);

        return new PostDetailResponse(post);
    }
    @GetMapping("/write")
    @Operation(summary = "[GET] 게시글 작성 페이지", description = "게시글 작성 페이지 이동")
    public String writePost(HttpServletRequest request){
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        return "게시글 작성 페이지 이동";
    }
    @PostMapping("/write")
    @Operation(summary = "[POST] 게시글 작성", description = "게시글 작성")
    public Long writePost(@RequestPart(value = "imageFiles",required = false) List<MultipartFile> imageFiles,
            @RequestPart(value = "attachFile",required = false) MultipartFile singleAttachFile,
            @RequestPart(value = "postWriteRequest") PostWriteRequest postWriteRequest,HttpServletRequest request) throws IOException {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        log.info("닉네임 = {}",member.getNickname());
        return boardService.writePost(imageFiles,singleAttachFile,postWriteRequest,member);
    }
    @PostMapping("/{postId}/update")
    @Operation(summary = "[POST] 게시글 수정", description = "게시글 수정")
    public Long updatePost(@PathVariable Long postId,
                           @RequestPart(value = "imageFiles",required = false) List<MultipartFile> imageFiles,
                           @RequestPart(value = "attachFile",required = false) MultipartFile singleAttachFile,
                           @RequestPart(value = "postUpdateRequest") PostUpdateRequest postUpdateRequest,HttpServletRequest request) throws IOException {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        return boardService.updatePost(postId,imageFiles,singleAttachFile,postUpdateRequest);
    }
    @DeleteMapping("/{postId}/delete")
    @Operation(summary = "[DELETE] 게시글 삭제", description = "게시글 삭제")
    public void deletePost(@PathVariable Long postId,HttpServletRequest request) {
        //todo: 권한 체크
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        boardService.deletePost(postId);
    }

    @GetMapping("/{postId}/update")
    @Operation(summary = "[GET] 게시글 조회", description = "조회수 1 증가")
    public Post updatePost(@PathVariable Long postId,HttpServletRequest request){
        return boardService.postDetail(postId);
    }

    @PostMapping("/{postId}/comment")
    @Operation(summary = "[POST] 댓글 작성", description = "댓글 작성")
    public void writeComment(@PathVariable Long postId, @RequestBody CommentWriteRequest commentWriteRequest,HttpServletRequest request) {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        boardService.writeComment(postId,commentWriteRequest);
    }

    @PostMapping("/{postId}/comment/{commentId}")
    @Operation(summary = "[POST] 댓글 수정", description = "댓글 수정")
    public void updateComment(@PathVariable Long postId,@PathVariable Long commentId, @RequestBody CommentUpdateRequest commentUpdateRequest,
                              HttpServletRequest request) {
        boardService.updateComment(postId,commentId,commentUpdateRequest);
    }

    @DeleteMapping("/{postId}/comment/{commentId}")
    @Operation(summary = "[DELETE] 댓글 삭제", description = "댓글 삭제")
    public void deleteComment(@PathVariable Long commentId,HttpServletRequest request){
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        boardService.deleteComment(commentId);
    }

    @GetMapping("/images/{filename}")
    @Operation(summary = "[GET] 이미지 조회", description = "<img> 태그로 이미지를 조회")
    public Resource downloadImage(@PathVariable String filename) throws MalformedURLException {
        return new UrlResource("file:" + fileStore.getFullPath(filename));
    }

    @GetMapping("/attach/{postId}")
    @Operation(summary = "[GET] 파일 다운로드", description = "게시글 id를 요청하도록 했다.")
    public ResponseEntity<Resource> downloadAttach(@PathVariable Long postId)
            throws MalformedURLException {
        return boardService.downloadAttach(postId);
    }

    @GetMapping("{postId}/like")
    @Operation(summary = "댓글 좋아요 GET", description = "로그인해야만 좋아요 가능. 1번 요청하면 좋아요(true), 2번 요청하면 취소(false)")
    public boolean likePost(@PathVariable Long postId, HttpServletRequest request) throws Exception {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");

        if(!boardService.isLike(member.getId(), postId)){
            log.info("좋아요");
            boardService.likePost(member.getId(),postId);
            return true;
        }
        else {
            log.info("좋아요 취소");
            boardService.unlikePost(member.getId(),postId);
            return false;
        }
    }

}
