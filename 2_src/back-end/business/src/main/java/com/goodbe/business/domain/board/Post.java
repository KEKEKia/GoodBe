package com.goodbe.business.domain.board;

import com.goodbe.business.domain.BaseTimeEntity;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.file.UploadFile;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Post extends BaseTimeEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

//    @JsonBackReference
    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<UploadFile> files=new ArrayList<>(); // 이미지

//    @JsonBackReference
    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    private List<Comment> comments=new ArrayList<>(); // 댓글

    @OneToOne(cascade = CascadeType.ALL, fetch = LAZY)
    @JoinColumn(name = "file_id")
    private UploadFile attachFile; // 첨부파일

    @Column(nullable = false)
    private String boardType; // 게시판 종류

    @Column(nullable = false)
    private String nickname; // 닉네임

    @Column(nullable = false)
    private String title; // 제목

    @Lob
    @Column(nullable = false)
    private String content; // 내용

    @Column(nullable = false)
    private int hits; // 조회수

    @Column(nullable = false)
    private int likeCount; // 좋아요
    public Post(Member member, String boardType, String nickname, String title, String content, int likeCount) {
        this.member = member;
        this.boardType = boardType;
        this.nickname = nickname;
        this.title = title;
        this.content = content;
        this.likeCount = likeCount;
    }

    public Post(Member member, String boardType, String nickname, String title, String content) {
        this.member = member;
        this.boardType = boardType;
        this.nickname = nickname;
        this.title = title;
        this.content = content;
        likeCount=0;
    }
    @Builder
    public Post(Member member, List<UploadFile> files, UploadFile attachFile,
                String boardType, String nickname, String title, String content, int likeCount) {
        this.member = member;
        this.files = files;
        this.attachFile = attachFile;
        this.boardType = boardType;
        this.nickname=nickname;
        this.title = title;
        this.content = content;
        this.likeCount = likeCount;
    }

    // 게시글 수정 로직
    public void update(String boardType, String title, String content, List<UploadFile> files, UploadFile attachFile) {
        this.boardType = boardType;
        this.title = title;
        this.content = content;
        this.files = files;
        this.attachFile = attachFile;
    }
    public void viewPost(){
        this.hits++;
    }
    public void like(){
        this.likeCount++;
    }
    public void likeCancel(){
        this.likeCount--;
    }
}
