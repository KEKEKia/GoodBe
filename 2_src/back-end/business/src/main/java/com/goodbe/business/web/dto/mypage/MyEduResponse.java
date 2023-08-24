package com.goodbe.business.web.dto.mypage;

import com.goodbe.business.domain.training.Edu;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Schema(description = "마이페이지 관심 채용공고 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyEduResponse {
    private String id;
    private String company;
    private String title;

    @Builder
    public MyEduResponse(Edu entity) {
        this.id = entity.getId();
        this.company = entity.getCompany();
        this.title = entity.getTitle();
    }
}
