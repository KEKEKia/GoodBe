package com.goodbe.business.domain.member;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Objects;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class MemberJobPostId implements Serializable {
    private Long memberId;
    private String jobPostId;

    @Override
    public int hashCode() {
        return Objects.hash(getMemberId(),getJobPostId());
    }

    @Override
    public boolean equals(Object obj) {
        if(this==obj) return true;
        if(obj==null || getClass() != obj.getClass()) return false;
        MemberJobPostId memberJobPostId=(MemberJobPostId) obj;
        return Objects.equals(getMemberId(),memberJobPostId.getMemberId()) && Objects.equals(getJobPostId(),((MemberJobPostId) obj).getJobPostId());
    }
}
