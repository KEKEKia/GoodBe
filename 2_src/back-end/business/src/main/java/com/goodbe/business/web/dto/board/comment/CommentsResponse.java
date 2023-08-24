package com.goodbe.business.web.dto.board.comment;

import com.goodbe.business.domain.board.Comment;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Member;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Schema(description = "게시물의 댓글 응답 DTO")
@Data
public class CommentsResponse {
    private Long commentId;
    private String nickname;
    private String content;
    private LocalDateTime createDate;

    public CommentsResponse(Comment entity) {
        this.commentId=entity.getId();
        this.nickname=entity.getMember().getNickname();
        this.content = entity.getContent();
        this.createDate = entity.getCreateDate();
    }
}
