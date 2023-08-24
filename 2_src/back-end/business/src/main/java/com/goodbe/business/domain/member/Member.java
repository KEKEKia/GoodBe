package com.goodbe.business.domain.member;

import com.goodbe.business.domain.BaseTimeEntity;
import com.goodbe.business.domain.board.Comment;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.domain.training.Edu;
import com.goodbe.business.domain.training.EduReview;
import com.goodbe.business.web.dto.mypage.MemberUpdateRequest;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Member extends BaseTimeEntity { // 일반회원 엔티티
    @Id
//    @GeneratedValue(generator = "system-uuid")
//    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="member_id")
    private Long id;
//    private UUID id;

    @OneToMany(mappedBy = "memberId", cascade = CascadeType.REMOVE)
    private List<MemberEdu> memberEdus=new ArrayList<>(); // 관심 교육

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE)
    private List<Consulting> consultings=new ArrayList<>(); // 상담

//    @OneToMany(mappedBy = "member")
//    private List<EduReview> eduReviews =new ArrayList<>(); // 교육 후기

    @OneToMany(mappedBy = "member")
    private List<Post> posts=new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Comment> comments=new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, fetch = LAZY)
    @JoinColumn(name = "file_id")
    private UploadFile profileImage; // 프로필 이미지

    @Column(nullable = false)
    private String email;

//    @Column(nullable = false)
//    private String password;

    @Column(nullable = false)
    private String name; // 실명

    @Column(nullable = false)
    private String nickname; // 닉네임

    @Column
    private LocalDate birth; // 생년월일

    @Column
    private String address;

    @Column
    private String favoriteCompany; // 관심 회사

    @Column
    private String favoriteJob; // 관심 직무

    @Column
    private boolean isWithdrawn; // 탈퇴 여부


    public Member(String email, String name, String nickname) {
        this.email = email;
        this.name = name;
        this.nickname = nickname;
    }

    public Member(String email, String name, String nickname, LocalDate birth,
                  String address, String favoriteCompany, String favoriteJob, boolean isWithdrawn) {
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.birth = birth;
        this.address = address;
        this.favoriteCompany = favoriteCompany;
        this.favoriteJob = favoriteJob;
        this.isWithdrawn = isWithdrawn;
    }

    @Builder // 회원가입 전용
    public Member(String email, String name, String nickname, String birth, String address, String favoriteCompany, String favoriteJob) {
        this.email = email;
        this.name = name;
        this.nickname = nickname;
        this.birth = LocalDate.parse(birth, DateTimeFormatter.ISO_DATE);
        this.address = address;
        this.favoriteCompany = favoriteCompany;
        this.favoriteJob = favoriteJob;
    }

    public void update(MemberUpdateRequest request) {
        this.profileImage = request.getProfileImage();
        this.name = request.getName();
        this.nickname = request.getNickname();
        this.birth = request.getBirth();
        this.address = request.getAddress();
        this.favoriteCompany = request.getFavoriteCompany();
        this.favoriteJob = request.getFavoriteJob();
    }

}
