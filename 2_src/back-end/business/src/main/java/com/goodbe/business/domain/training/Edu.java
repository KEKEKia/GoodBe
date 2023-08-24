package com.goodbe.business.domain.training;

import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.member.MemberEdu;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Edu { // 국비교육 엔티티
    @Id
    @Column(name="edu_id")
    private String id;

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "school_id")
//    private School school;

    @OneToMany(mappedBy = "edu", cascade = CascadeType.ALL)
    private List<Consulting> consultings=new ArrayList<>();

    @OneToMany(mappedBy = "eduId", cascade = CascadeType.REMOVE)
    private List<MemberEdu> memberEdus=new ArrayList<>(); // 관심 교육

//    @OneToMany(mappedBy = "edu")
//    private List<EduReview> eduReviews =new ArrayList<>();

    @Column
    private String title; // 교육명

    @Column
    private String titleLink;

    @Column
    private String company;

    @Column
    private String companyLink;

    @Column
    private String address;

    @Column
    private String tel;

    @Column
    private String period;

    @Column
    private String onoff;

    @Column
    private String expense;

    @Column
    private String realExpense;

    @Column
    private String content;

    @Column
    private String detail;

    @Column
    private String man; // 정원

    @Builder
    public Edu(String id, List<Consulting> consultings, List<MemberEdu> memberEdus, String title,
               String titleLink, String company, String companyLink, String address, String tel, String period,
               String onoff, String expense, String realExpense, String content, String detail, String man) {
        this.id = id;
        this.consultings = consultings;
        this.memberEdus = memberEdus;
        this.title = title;
        this.titleLink = titleLink;
        this.company = company;
        this.companyLink = companyLink;
        this.address = address;
        this.tel = tel;
        this.period = period;
        this.onoff = onoff;
        this.expense = expense;
        this.realExpense = realExpense;
        this.content = content;
        this.detail = detail;
        this.man = man;
    }
}
