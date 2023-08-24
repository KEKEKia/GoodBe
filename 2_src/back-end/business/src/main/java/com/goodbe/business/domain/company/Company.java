package com.goodbe.business.domain.company;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

//@Entity
//@Getter
//@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Company { // 기업 엔티티
//    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name="company_id")
//    private String id;
//
////    @OneToMany(mappedBy = "company")
////    private List<CompanyMember> members=new ArrayList<>();
//
//    @Column(nullable = false)
//    private String name;
//
//    @Column
//    private String contents; // 주요 사업내용
//    @Column
//    private String owner; // 대표자명
//    @Column
//    private String employees; // 종업원 수
//    @Column
//    private String revenue; // 연매출액
//    @Column
//    private String industry; // 업종
//    @Column
//    private String location; // 회사 주소
//    @Column
//    private String homepage; // 홈페이지
//
//    @Column
//    @Enumerated(EnumType.STRING)
//    private CompanySize size;
}
