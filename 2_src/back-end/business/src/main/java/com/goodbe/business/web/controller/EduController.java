package com.goodbe.business.web.controller;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.exception.AccessDeniedException;
import com.goodbe.business.web.dto.edu.EduDetailResponse;
import com.goodbe.business.web.dto.edu.ReserveConsultingRequest;
import com.goodbe.business.web.service.AuthService;
import com.goodbe.business.web.service.EduService;
import com.goodbe.business.web.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/edu")
@Tag(name = "Edu", description = "국비교육 API Document")
public class EduController {
    private final EduService eduService;
    private final MemberService memberService;
    private final AuthService authService;
    @GetMapping("/like/{eduId}")
    @Operation(summary = "[GET] 관심교육 등록", description = "Pathvariable로 eduId를 넘기면 해당 교육을 관심목록에 등록한다.")
    public String likeEdu(@PathVariable String eduId,HttpServletRequest request) throws Exception {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");

        if(!eduService.isLike(member.getId(),eduId)){
            eduService.likeEdu(member,eduId);
            return "관심 교육 목록에 등록하였습니다.";
        } else{
            eduService.unlikeEdu(member,eduId);
            return "관심 교육 목록에서 삭제하였습니다.";
        }
    }
    @GetMapping("/{eduId}")
    @Operation(summary = "[GET] 상담 예약 페이지", description = "교육명 반환")
    public String getReservePage(@PathVariable String eduId, HttpServletRequest request) throws AccessDeniedException {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");
        return eduService.findById(eduId).getTitle();
    }

    @PostMapping("/{eduId}")
    @Operation(summary = "[GET] 상담 예약 페이지", description = "예약 시간을 지정한다.")
    public String reserveConsulting(@PathVariable String eduId,
                                    @RequestBody ReserveConsultingRequest reserveConsultingRequest, HttpServletRequest request) throws AccessDeniedException {
        Member member=authService.authorization(request);
        if(member==null) throw new AccessDeniedException("로그인하세요");

        eduService.reserveConsulting(member,eduId,reserveConsultingRequest.getReserveTime());
        return "예약 완료";
    }

    @GetMapping("/view/{eduId}")
    @Operation(summary = "[GET] 교육 상세보기 페이지")
    public EduDetailResponse eduDetail(@PathVariable String eduId){
        return new EduDetailResponse(eduService.eduDetail(eduId));
    }

}
