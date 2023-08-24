package com.goodbe.business.web.dto.board.post;

import com.goodbe.business.domain.board.Comment;
import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.web.dto.board.comment.CommentsResponse;
import com.goodbe.business.web.dto.file.UploadFileResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.OneToMany;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.*;

@Schema(description = "개별 게시물 응답 DTO")
@Data
public class PostDetailResponse {
    private Long id;
    private Member member;
    private Long memberId;
    private String nickname;
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private int hits;
    private int likeCount;
    private int commentCount;
    private List<UploadFileResponse> files;
    private List<CommentsResponse> comments;

    public PostDetailResponse(Post entity) {
        this.id = entity.getId();
        this.nickname = entity.getMember().getNickname();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.hits=entity.getHits();
        this.likeCount = entity.getLikeCount();
        this.files=entity.getFiles().stream().map(UploadFileResponse::new).collect(toList());
        this.comments=entity.getComments().stream().map(CommentsResponse::new).collect(toList());
        this.commentCount=comments.size();
    }
}
