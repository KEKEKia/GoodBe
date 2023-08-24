package com.goodbe.business.web.dto.jobpost;

import com.goodbe.business.domain.company.JobPost;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "채용공고 목록 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class JobPostListResponse {

    private String id;
    private String companyName;
    private String wantedTitle;
    private String degree;// 학력
    private String address;
    private String career;
    private String sal;

    @Builder
    public JobPostListResponse(JobPost entity) {
        this.id = entity.getId();
        this.companyName = entity.getCompanyName();
        this.wantedTitle = entity.getWantedTitle();
        this.degree = entity.getDegree();
        this.address=entity.getAddress();
        this.career=entity.getCareer();
        this.sal = entity.getSal();
    }
}
