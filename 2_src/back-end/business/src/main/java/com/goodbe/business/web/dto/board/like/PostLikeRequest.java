package com.goodbe.business.web.dto.board.like;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Schema(description = "좋아요 요청 DTO")
@Data
public class PostLikeRequest {
    private Long memberId;
    private Long postId;

    public PostLikeRequest(Long memberId, Long postId) {
        this.memberId = memberId;
        this.postId = postId;
    }

//    public Like toEntity(){
//        Like.builder().member(m)
//    }
}
