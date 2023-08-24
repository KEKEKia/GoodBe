package com.goodbe.search.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goodbe.search.dto.JobPost;
import com.goodbe.search.mapper.JobPostMapper;
import java.util.StringTokenizer;

@Service
public class JobPostServiceImpl implements JobPostService {
    StringTokenizer st;

    @Autowired
    private JobPostMapper jobPostMapper;

    @Override
    public List<JobPost> getAllJobPost() {
        return jobPostMapper.selectJobData();
    }

    @Override
    public List<JobPost> getJobPostByKeyword(String keyword) {
        List<String> wordList = new ArrayList<>();
        String word;
        st = new StringTokenizer(keyword);
        while(st.hasMoreTokens()){
            word = st.nextToken();
            word = '%' + word + '%';
            wordList.add(word);
        }
        return jobPostMapper.selectJobDataByKeyword(wordList);
    }
    
}
