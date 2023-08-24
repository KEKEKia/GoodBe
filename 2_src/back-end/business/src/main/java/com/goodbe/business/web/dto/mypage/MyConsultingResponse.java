package com.goodbe.business.web.dto.mypage;

import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.training.Edu;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Schema(description = "마이페이지 교육 상담 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyConsultingResponse {
    private Long id; // 상담id
    private String title; // 교육명
    private String company; // 교육기관
    private String reserveTime;

    @Builder
    public MyConsultingResponse(Consulting entity) {
        this.id=entity.getId();
        this.title = entity.getEdu().getTitle();
        this.company = entity.getEdu().getCompany();
        this.reserveTime=entity.getReserveTime().toString().replace("T"," ");
    }
}
