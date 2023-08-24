package com.goodbe.business.web.controller;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.company.JobPost;
import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.training.Edu;
import com.goodbe.business.exception.AccessDeniedException;
import com.goodbe.business.web.dto.edu.EduListResponse;
import com.goodbe.business.web.dto.mypage.*;
import com.goodbe.business.web.service.AuthService;
import com.goodbe.business.web.service.MemberService;
import com.goodbe.business.web.service.MyPageService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/mypage")
@Tag(name = "MyPage", description = "마이페이지 API Document")
public class MyPageController {
    private final MemberService memberService;
    private final MyPageService myPageService;
    private final AuthService authService;

    WebClient client = WebClient.builder()
            .baseUrl("https://i9a801.p.ssafy.io/auth") // 요청을 인증 서버로 보냄
            .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE) // 기본 해더
            .build();

    @GetMapping("")
    @Operation(summary = "[GET] 마이페이지 초기 화면", description = "프로필 사진과 닉네임을 응답으로 보낸다.")
    public MyPageResponse myPageHome(HttpServletRequest request){ // JWT 갖고와야함
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        return new MyPageResponse(member);
    }

    @GetMapping("/memberinfo")
    @Operation(summary = "[GET] 마이페이지 개인정보 화면", description = "회원정보를 응답으로 보낸다.")
    public MemberInfoResponse memberInfo(HttpServletRequest request){ // JWT 갖고와야함
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        return new MemberInfoResponse(member);
    }

    @PostMapping("/memberinfo/update")
    @Operation(summary = "[POST] 마이페이지 회원정보 수정", description = "회원정보를 수정")
    public MemberInfoResponse memberInfoUpdate(@RequestPart(value = "profileImage",required = false) MultipartFile profileImage,
                                               @RequestPart(value = "memberUpdateRequest") MemberUpdateRequest memberUpdateRequest,
                                               HttpServletRequest request) throws IOException {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        memberService.update(member.getId(), profileImage,memberUpdateRequest);
        return new MemberInfoResponse(member);
    }

    //todo: 입장하기 버튼 누르면 상담하러 들어갈 수 있어야 하고, 끝나면 상담 내역을 삭제해야 함
    @GetMapping("/consulting")
    @Operation(summary = "[GET] 마이페이지 교육 상담 관리", description = "예약한 교육 상담들을 응답으로 보낸다.")
    public List<MyConsultingResponse> myConsulting(HttpServletRequest request){ // JWT 갖고와야함
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        List<Consulting> consultings=myPageService.myConsultings(member.getId());
        List<MyConsultingResponse> result=new ArrayList<>();

        for (Consulting c:consultings) {
            result.add(new MyConsultingResponse(c));
        }
        return result;
    }


    @GetMapping("/edu")
    @Operation(summary = "[GET] 마이페이지 관심 교육 관리", description = "회원의 관심 교육들을 응답으로 보낸다.")
    public List<MyEduResponse> interestedEdu(HttpServletRequest request) throws AccessDeniedException { // JWT 갖고와야함
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        List<Edu> myEdus= myPageService.myEdus(member.getId());
        return myEdus.stream().map(MyEduResponse::new).collect(Collectors.toList());
    }


    @GetMapping("/job-post")
    @Operation(summary = "[GET] 마이페이지 관심 채용공고 관리", description = "회원의 관심 채용공고들을 응답으로 보낸다.")
    public List<MyJobPostResponse> interestedJobPost(HttpServletRequest request) throws AccessDeniedException { // JWT 갖고와야함
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        List<JobPost> myJobPosts=myPageService.myJobPosts(member.getId());
        return myJobPosts.stream().map(MyJobPostResponse::new).collect(Collectors.toList());
    }

    @GetMapping("/posts")
    @Operation(summary = "[GET] 내가 쓴 글 목록", description = "내가 쓴 글들을 응답으로 보낸다.")
    public List<MyPostsResponse> myPosts(HttpServletRequest request){
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        List<Post> posts=myPageService.myPosts(member.getId());
        return posts.stream().map(MyPostsResponse::new).collect(Collectors.toList());
    }

}
