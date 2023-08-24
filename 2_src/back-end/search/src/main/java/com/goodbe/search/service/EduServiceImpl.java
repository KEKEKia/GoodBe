package com.goodbe.search.service;

import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodbe.search.dto.Edu;
import com.goodbe.search.mapper.EduMapper;

@Service
public class EduServiceImpl implements EduService {

    StringTokenizer st;

    @Autowired
    private EduMapper eduMapper;

    @Override
    public List<Edu> getAllEdu() {
        return eduMapper.selectEdu();
    }

    @Override
    public List<Edu> getEduByKeyword(String keyword) {
        List<String> wordList = new ArrayList<>();
        String word;
        st = new StringTokenizer(keyword);
        while(st.hasMoreTokens()){
            word = st.nextToken();
            word = '%' + word + '%';
            wordList.add(word);
        }
        return eduMapper.selectEduDataByKeyword(wordList);
    }
    
}
