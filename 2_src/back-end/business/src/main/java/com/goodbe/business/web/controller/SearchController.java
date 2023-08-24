package com.goodbe.business.web.controller;

import com.goodbe.business.web.dto.edu.EduListResponse;
import com.goodbe.business.web.dto.jobpost.JobPostListResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api/search")
@Tag(name = "Search", description = "국비교육 검색 화면 API Document")
public class SearchController {

    @Value("${server.ip.local}")
    private String localhost;
    @Value("${server.ip.remote}")
    private String ip;

    private WebClient client = WebClient.builder()
            .baseUrl("https://i9a801.p.ssafy.io/search") // 요청을 검색 서버로 보냄
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE) // 기본 해더
            .build();

    @GetMapping("/jobPost/all")
    @Operation(summary = "[GET] 전체 채용공고 불러오기")
    public List<JobPostListResponse> searchAllJobPost() {
        Mono<List<JobPostListResponse>> responseMono=client.get().uri("/jobPost/all").retrieve()
                .bodyToFlux(JobPostListResponse.class)
                .collectList();
        List<JobPostListResponse> result=responseMono.block();
        return result;
    }

    @GetMapping("/jobPost/{keyword}")
    @Operation(summary = "[GET] 검색어로 채용공고 불러오기")
    public List<JobPostListResponse> searchJobPostByKeyword(@PathVariable String keyword) {
        log.info("{}",keyword);
        Mono<List<JobPostListResponse>> responseMono=client.get().uri("/jobPost/{keyword}",keyword)
                .retrieve()
                .bodyToFlux(JobPostListResponse.class)
                .collectList();
        List<JobPostListResponse> result=responseMono.block();
        return result;
    }

    @GetMapping("/edu/all")
    @Operation(summary = "[GET] 전체 국비교육 불러오기")
    public List<EduListResponse> searchAllEdu() {
        Mono<List<EduListResponse>> responseMono=client.get().uri("/edu/all").retrieve()
                .bodyToFlux(EduListResponse.class)
                .collectList();
        List<EduListResponse> result=responseMono.block();
        return result;
    }


    @GetMapping("/edu/{keyword}")
    @Operation(summary = "[GET] 검색어로 국비교육 불러오기")
    public List<EduListResponse> searchEduByKeyword(@PathVariable String keyword) {
        Mono<List<EduListResponse>> responseMono=client.get().uri("/edu/{keyword}",keyword)
                .retrieve()
                .bodyToFlux(EduListResponse.class)
                .collectList();
        List<EduListResponse> result=responseMono.block();
        return result;
    }

}
