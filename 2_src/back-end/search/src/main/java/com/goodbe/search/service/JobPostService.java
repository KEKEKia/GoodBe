package com.goodbe.search.service;

import java.util.List;

import com.goodbe.search.dto.*;

public interface JobPostService {
    // 전체 채용공고 데이터 반환
    public List<JobPost> getAllJobPost();

    // 검색어로 채용공고 데이터 반환
    public List<JobPost> getJobPostByKeyword(String keyword);
}
