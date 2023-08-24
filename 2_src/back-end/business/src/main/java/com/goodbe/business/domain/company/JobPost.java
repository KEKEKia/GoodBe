package com.goodbe.business.domain.company;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JobPost { // 채용공고 엔티티
    @Id
    @Column(name="job_id")
    private String id;

//    @ManyToOne
//    @JoinColumn(name = "company_id")
//    private Company company;

    @Column
    private String companyName;

    @Column
    private String wantedTitle; // 공고 제목

    @Column
    private String companyUrl;

    @Column
    private String degree;

    @Column
    private String major;

    @Column
    private String address;

    @Column
    private String workAddress;

    @Column
    private String preference; // 우대사항

    @Column
    private String career;

    @Column
    private String certificate;

    @Column
    @Lob
    private String jobContent;

    @Column
    private String sal;

    @Column
    private String employmentForm;

    @Column
    private String endDate;

    @Builder

    public JobPost(String id, String companyName, String wantedTitle, String companyUrl, String degree,
                   String major, String address, String workAddress, String preference, String career,
                   String certificate, String jobContent, String sal, String employmentForm, String endDate) {
        this.id = id;
        this.companyName = companyName;
        this.wantedTitle = wantedTitle;
        this.companyUrl = companyUrl;
        this.degree = degree;
        this.major = major;
        this.address = address;
        this.workAddress = workAddress;
        this.preference = preference;
        this.career = career;
        this.certificate = certificate;
        this.jobContent = jobContent;
        this.sal = sal;
        this.employmentForm = employmentForm;
        this.endDate = endDate;
    }
}
