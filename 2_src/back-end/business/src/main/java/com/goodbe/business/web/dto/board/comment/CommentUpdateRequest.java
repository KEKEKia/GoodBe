package com.goodbe.business.web.dto.board.comment;


import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "댓글 수정 요청 DTO")
@Data
public class CommentUpdateRequest {
    private String content;
}
