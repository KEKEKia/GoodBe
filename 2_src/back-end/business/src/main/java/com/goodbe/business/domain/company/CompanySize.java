package com.goodbe.business.domain.company;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
@Getter
@AllArgsConstructor
public enum CompanySize {
    LARGE("대기업"),MIDDLE("중견기업"),SMALL("중소기업");
    private String krName;
}
