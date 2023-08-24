package com.goodbe.business.web.dto.edu;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Schema(description = "국비교육 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EduListResponse {
    private String eduId;
    private String title;
    private String titleLink;
    private String company;
    private String companyLink;
    private String telNo;
    private String address;
    private String content;
    private String period;
    private String onoff;
    private String expense;
    private String realExpense;
    private String detail;
    private String man;
}