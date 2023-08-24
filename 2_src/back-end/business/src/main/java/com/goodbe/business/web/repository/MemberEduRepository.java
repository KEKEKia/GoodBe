package com.goodbe.business.web.repository;

import com.goodbe.business.domain.member.MemberEdu;
import com.goodbe.business.domain.member.MemberEduId;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MemberEduRepository extends JpaRepository<MemberEdu, MemberEduId> {
    @Query(value = "select me from MemberEdu me where me.memberId.id = :memberId and me.eduId.id = :eduId")
    MemberEdu findMemberEduByMemberIdAndTrprId(@Param("memberId") Long memberId,@Param("eduId") String eduId);
    @Query(value = "select me from MemberEdu me where me.memberId.id = :memberId")
    List<MemberEdu> findAllByMemberId(@Param("memberId") Long memberId);
}
