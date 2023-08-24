package com.goodbe.business.domain.file;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Member;
import lombok.*;

import javax.persistence.*;

import static javax.persistence.FetchType.*;

@Getter @Setter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class UploadFile { // 파일 클래스
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="file_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "post_id")
    private Post post; // 게시글 첨부 사진

    @OneToOne(cascade = CascadeType.ALL, fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member; // 회원 프로필 이미지

    private String uploadFileName;
    private String storeFileName;
    private String fileUrl;

    @Builder
    public UploadFile(String uploadFileName, String storeFileName) {
        this.uploadFileName = uploadFileName;
        this.storeFileName = storeFileName;
    }
}
