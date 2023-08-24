package com.goodbe.business.web.repository;

import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.training.Edu;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface ConsultingRepository extends JpaRepository<Consulting,Long> {
    List<Consulting> findByMemberId(Long MemberId);
    @Query(value = "select c from Consulting c where c.edu.id= :eduId and c.reserveTime= :reserveTime")
    Consulting findByEduIdAndReserveTime(@Param("eduId") String eduId,@Param("reserveTime") LocalDateTime reserveTime);

}
