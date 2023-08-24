package com.goodbe.business.web.repository;

import com.goodbe.business.domain.company.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobPostRepository extends JpaRepository<JobPost,String> {
//    List<JobPost> findAllOrderByEndDateAsc(); // 마감임박순
//    List<JobPost> findByMemberId(Long memberId);
}
