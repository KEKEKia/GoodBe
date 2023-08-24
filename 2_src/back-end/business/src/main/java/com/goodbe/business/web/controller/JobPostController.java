package com.goodbe.business.web.controller;


import com.goodbe.business.domain.company.JobPost;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.exception.AccessDeniedException;
import com.goodbe.business.web.dto.jobpost.JobPostDetailResponse;
import com.goodbe.business.web.dto.jobpost.JobPostListResponse;
import com.goodbe.business.web.service.AuthService;
import com.goodbe.business.web.service.JobPostService;
import com.goodbe.business.web.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

import static java.util.stream.Collectors.toList;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/job-post")
@Tag(name = "채용공고", description = "채용공고 API Document")
public class JobPostController {
    private final MemberService memberService;
    private final JobPostService jobPostService;
    private final AuthService authService;

//    public List<PostsResponse> postList(@PageableDefault(sort = "id", size = 10, direction = Sort.Direction.DESC) Pageable pageable){
//        Page<Post> posts=boardService.postList(pageable);
//        return posts.stream().map(PostsResponse::new).collect(toList());
//    }
    @GetMapping("")
        @Operation(summary = "[GET] 채용공고 리스트", description = "초기 진입시 공고id로 정렬")
        public List<JobPostListResponse> jobPostList(@PageableDefault(sort = "id", size = 3, direction = Sort.Direction.DESC) Pageable pageable){
            Page<JobPost> posts=jobPostService.jobPostList(pageable);
            return posts.stream().map(JobPostListResponse::new).collect(toList());
    }

    @GetMapping("/sort-by-end-date")
    @Operation(summary = "[GET] 채용공고 리스트", description = "마감일 빠른 순으로 정렬")
    public List<JobPostListResponse> jobPostListSortByEndDate(@PageableDefault(sort = "endDate", size = 3, direction = Sort.Direction.ASC) Pageable pageable){
        Page<JobPost> posts=jobPostService.jobPostList(pageable);
        return posts.stream().map(JobPostListResponse::new).collect(toList());
    }

//    @GetMapping("")
//    public List<JobPostHomeResponse> jobPostListBy(@PageableDefault(sort = "id", size = 3, direction = Sort.Direction.DESC) Pageable pageable){
//        Page<JobPost> posts=jobPostService.jobPostList(pageable);
//        return posts.stream().map(JobPostHomeResponse::new).collect(toList());
//    }
    @GetMapping("/{jobPostId}")
    @Operation(summary = "[GET] 채용공고 상세보기")
    public JobPostDetailResponse jobPostList(@PathVariable String jobPostId){
        return new JobPostDetailResponse(jobPostService.jobPostDetail(jobPostId));
    }

    @GetMapping("/like/{jobPostId}")
    @Operation(summary = "[GET] 관심 채용공고 등록", description = "Pathvariable로 jobPostId를 넘기면 해당 교육을 관심목록에 등록한다.")
    public String likeEdu(@PathVariable String jobPostId, HttpServletRequest request) throws Exception {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");

        if(!jobPostService.isLike(member.getId(),jobPostId)){
            jobPostService.likeJobPost(member,jobPostId);
            return "관심 채용공고 목록에 등록하였습니다.";
        } else{
            jobPostService.unlikeJobPost(member,jobPostId);
            return "관심 채용공고 목록에서 삭제하였습니다.";
        }
    }

}
