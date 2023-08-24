package com.goodbe.search.service;

import java.util.List;

import com.goodbe.search.dto.*;

public interface EduService {
    // 전체 국비교육 데이터 반환
    public List<Edu> getAllEdu();
    
    // 검색어를 입력받아 국비교육 데이터 반환
    public List<Edu> getEduByKeyword(String keyword);
}
