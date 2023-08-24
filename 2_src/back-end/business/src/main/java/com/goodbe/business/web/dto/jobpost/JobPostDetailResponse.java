package com.goodbe.business.web.dto.jobpost;

import com.goodbe.business.domain.company.JobPost;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Schema(description = "채용공고 상세보기 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JobPostDetailResponse {
    private String companyName;
    private String wantedTitle;
    private String companyUrl;
    private String degree; // 학력
    private String address;
    private String workAddress;
    private String preference;
    private String career;
    private String jobContent;
    private String certificate;
    private String sal;
    private String employmentForm;
    private String endDate;

    @Builder
    public JobPostDetailResponse(JobPost entity) {
        this.companyName = entity.getCompanyName();
        this.wantedTitle = entity.getWantedTitle();
        this.companyUrl = entity.getCompanyUrl();
        this.degree = entity.getDegree();
        this.address = entity.getAddress();
        this.workAddress = entity.getWorkAddress();
        this.preference = entity.getPreference();
        this.career = entity.getCareer();
        this.jobContent = entity.getJobContent();
        this.certificate = entity.getCertificate();
        this.sal = entity.getSal();
        this.employmentForm = entity.getEmploymentForm();
        this.endDate = entity.getEndDate();
    }
}
