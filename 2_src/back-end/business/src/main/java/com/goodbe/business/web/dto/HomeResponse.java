package com.goodbe.business.web.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Schema(description = "메인화면 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class HomeResponse { // 추천 교육 3개,
    private String title;
    private String subTltle;

    @Builder
    public HomeResponse(String title, String subTltle) {
        this.title = title;
        this.subTltle = subTltle;
    }
}
