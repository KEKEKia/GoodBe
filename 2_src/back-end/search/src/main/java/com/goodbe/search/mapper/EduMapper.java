package com.goodbe.search.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.goodbe.search.dto.*;

@Mapper
public interface EduMapper {
    // 모든 채용공고 가졍오기
    public List<Edu> selectEdu();

    public List<Edu> selectEduDataByKeyword(List<String> wordList);
}
