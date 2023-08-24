package com.goodbe.business.web.dto.mypage;

import com.goodbe.business.domain.company.JobPost;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Schema(description = "마이페이지 관심 채용공고 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyJobPostResponse {
    private String id;
    private String companyName;
    private String wantedTitle;

    @Builder
    public MyJobPostResponse(JobPost entity) {
        this.id = entity.getId();
        this.companyName = entity.getCompanyName();
        this.wantedTitle = entity.getWantedTitle();
    }
}
