package com.goodbe.business.web.dto.edu;

import com.goodbe.business.domain.training.Edu;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

@Schema(description = "교육 상세정보 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EduDetailResponse {
    private String company; // 교육기관
    private String title; // 교육명
    private String titleLink; // 훈련과정 상세 주소
    private String companyLink; // 교육기관 상세 주소
    private String address;
    private String tel;
    private String period;
    private String expense;
    private String onoff;
    private String man; // 정원

    public EduDetailResponse(Edu entity) {
        this.company = entity.getCompany();
        this.title = entity.getTitle();
        this.titleLink = entity.getTitleLink();
        this.companyLink=entity.getCompanyLink();
        this.address = entity.getAddress();
        this.tel = entity.getTel();
        this.period = entity.getPeriod();
        this.expense = entity.getExpense();
        this.onoff = entity.getOnoff();
        this.man = entity.getMan();
    }
}
