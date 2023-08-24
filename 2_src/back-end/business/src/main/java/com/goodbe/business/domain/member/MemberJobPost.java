package com.goodbe.business.domain.member;

import com.goodbe.business.domain.company.JobPost;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@IdClass(MemberJobPostId.class)
public class MemberJobPost {
    @Id
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="member_id")
    private Member memberId;

    @Id
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name="job_post_id")
    private JobPost jobPostId;

    @Builder
    public MemberJobPost(Member memberId, JobPost jobPostId) {
        this.memberId = memberId;
        this.jobPostId = jobPostId;
    }
}
