package com.goodbe.business.web.dto.board.comment;

import com.goodbe.business.domain.board.Comment;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Member;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Schema(description = "댓글 작성 요청 DTO")
@Data
public class CommentWriteRequest{
    private Member member;
    private Post post;
    private String content;

    public Comment toEntity(){
        return Comment.builder().member(member).post(post).content(content).build();
    }
}
