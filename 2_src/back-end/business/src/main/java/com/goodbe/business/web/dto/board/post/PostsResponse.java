package com.goodbe.business.web.dto.board.post;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.web.dto.board.comment.CommentsResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Schema(description = "게시물 리스트 응답 DTO")
@Data
public class PostsResponse {

    private Long id;
    private Member member;
    private Long memberId;
//    private String memberId;
    private String nickname;
    private String boardType; // 게시판 종류
    private String title;
    private String content;
    private int hits;
    private int likeCount;
    private LocalDateTime createDate;
    private int commentCount;
    private List<CommentsResponse> comments;

    public PostsResponse(Post entity) {
        this.id = entity.getId();
//        this.member = entity.getMember();
        this.memberId = entity.getMember().getId();
        this.nickname = entity.getMember().getNickname();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCount = entity.getLikeCount();
        this.hits=entity.getHits();
        this.createDate=entity.getCreateDate();
        this.commentCount=entity.getComments().stream().map(CommentsResponse::new).toList().size();
    }

}
