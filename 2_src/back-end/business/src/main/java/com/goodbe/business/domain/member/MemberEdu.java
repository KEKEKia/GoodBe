package com.goodbe.business.domain.member;

import com.goodbe.business.domain.training.Edu;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.*;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(MemberEduId.class)
public class MemberEdu {

    @Id
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="member_id")
    private Member memberId;

    @Id
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="edu_id")
    private Edu eduId;

    @Builder
    public MemberEdu(Member memberId, Edu eduId) {
        this.memberId = memberId;
        this.eduId = eduId;
    }
}
