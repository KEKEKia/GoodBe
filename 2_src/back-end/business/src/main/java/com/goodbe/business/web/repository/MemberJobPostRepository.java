package com.goodbe.business.web.repository;

import com.goodbe.business.domain.member.MemberJobPost;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberJobPostRepository extends JpaRepository<MemberJobPost,Long> {
    @Query(value = "select mj from MemberJobPost mj where mj.memberId.id = :memberId and mj.jobPostId.id = :jobPostId")
    MemberJobPost findMemberJobPostByMemberIdAndJobPostId(@Param("memberId") Long memberId, @Param("jobPostId") String jobPostId);
    @Query(value = "select mj from MemberJobPost mj where mj.memberId.id = :memberId")
    List<MemberJobPost> findAllByMemberId(@Param("memberId") Long memberId);
}
