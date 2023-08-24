package com.goodbe.business.web.dto.edu;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Schema(description = "상담 예약 요청 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ReserveConsultingRequest {

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime reserveTime;

    @Builder
    public ReserveConsultingRequest(LocalDateTime reserveTime) {
        this.reserveTime = reserveTime;
    }
}
