package com.goodbe.search.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodbe.search.dto.*;
import com.goodbe.search.service.EduService;
import com.goodbe.search.service.JobPostService;

import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@RequestMapping("/api/search")
public class SearchController {

	private final JobPostService jobPostService;
	private final EduService eduService;

	@ApiOperation(value = "전체 채용공고 불러오기", response = List.class)
	@GetMapping("/jobPost/all")
	public List<JobPost> searchAllJobPost() {
		return jobPostService.getAllJobPost();
	}

	@ApiOperation(value = "검색어로 채용공고 불러오기", response = List.class)
	@GetMapping("/jobPost/{keyword}")
	public List<JobPost> searchJobPostByKeyword(@PathVariable String keyword) {
		return jobPostService.getJobPostByKeyword(keyword);
	}

	@ApiOperation(value = "전체 국비교육 불러오기", response = List.class)
	@GetMapping("/edu/all")
	public List<Edu> searchAllEdu() {
		return eduService.getAllEdu();
	}

	@ApiOperation(value = "전체 국비교육 불러오기", response = List.class)
	@GetMapping("/edu/{keyword}")
	public List<Edu> searchEduByKeyword(@PathVariable String keyword) {
		System.out.println(keyword);
		return eduService.getEduByKeyword(keyword);
	}
}
