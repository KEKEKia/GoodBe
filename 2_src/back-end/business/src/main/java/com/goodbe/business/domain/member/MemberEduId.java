package com.goodbe.business.domain.member;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberEduId implements Serializable {
    private Long memberId;
    private String eduId;

    @Override
    public int hashCode() {
        return Objects.hash(getMemberId(),getEduId());
    }

    @Override
    public boolean equals(Object obj) {
        if(this==obj) return true;
        if(obj==null || getClass() != obj.getClass()) return false;
        MemberEduId memberEduId=(MemberEduId) obj;
        return Objects.equals(getMemberId(),memberEduId.getMemberId()) && Objects.equals(getEduId(),((MemberEduId) obj).getEduId());
    }
}
