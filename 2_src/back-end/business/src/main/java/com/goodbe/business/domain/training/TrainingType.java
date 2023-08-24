package com.goodbe.business.domain.training;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
@Getter
@AllArgsConstructor
public enum TrainingType {
    ONLINE("비대면"),OFFLINE("대면"),MIX("병행");
    private String krName;
}
