package com.goodbe.business.web.dto.mypage;

import com.goodbe.business.domain.board.Post;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Schema(description = "마이페이지 - 내가 쓴 글 목록 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyPostsResponse {
    private Long postId; // 클릭하면 게시글로 들어가기 위해 필요함
    private String boardType; // 게시판 종류
    private String title; // 제목
    private int hits; // 조회수
    private int likes; // 좋아요 수
    private int comments; // 댓글 수
    private String createDate; // 작성 시간

    @Builder
    public MyPostsResponse(Post entity) {
        this.postId = entity.getId();
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.hits = entity.getHits();
        this.likes = entity.getLikeCount();
        this.comments=entity.getComments().size();
        this.createDate=entity.getCreateDate().toString().substring(0,10); // 년월일만 분리
    }
}
