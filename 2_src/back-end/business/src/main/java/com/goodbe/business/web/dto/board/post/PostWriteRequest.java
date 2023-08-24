package com.goodbe.business.web.dto.board.post;

import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Schema(description = "게시물 작성 요청 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PostWriteRequest {
    private String boardType; // 게시판 종류
    private Member member;
    private String nickname;
    private String title;
    private String content;
    private int likeCount;
    private List<UploadFile> files;
    private UploadFile attachFile;
    @Builder
    public PostWriteRequest(Post entity) {
        this.boardType = entity.getBoardType();
        this.title = entity.getTitle();
        this.content = entity.getContent();
    }

    public Post toEntity(){
        //todo: 작성한 유저 정보를 인증 서버에서 가져오기
        return Post.builder().member(member).files(files).attachFile(attachFile)
                .boardType(boardType).nickname(nickname).title(title).content(content).likeCount(0).build();
    }

}
