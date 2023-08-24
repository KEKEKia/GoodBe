package com.goodbe.business.web.controller;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.exception.AccessDeniedException;
import com.goodbe.business.exception.AlreadyExistedMemberException;
import com.goodbe.business.web.dto.member.MemberLoginRequest;
import com.goodbe.business.web.dto.member.MemberRegisterRequest;
import com.goodbe.business.web.service.AuthService;
import com.goodbe.business.web.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api/member")
@RequiredArgsConstructor
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final AuthService authService;

    @GetMapping("/register")
    @Operation(summary = "[GET] 회원가입 페이지", description = "이메일 반환하면 readOnly로")
    public String register(HttpServletRequest request){

        String email = authService.getEmail(request);
        System.out.println(email);
        return email;
    }

<<<<<<< HEAD
=======
    =======return authService.getEmail(request);

    }

>>>>>>> master
    @PostMapping("/register")
    public String register(@RequestBody MemberRegisterRequest memberRegisterRequest,
                           HttpServletRequest request){
        if(authService.authorization(request) != null){ // findByEmail을 했는데 회원이 있으면 가입시키지 않는다.
            throw new AlreadyExistedMemberException("이미 가입된 이메일입니다.");
        }
        memberService.register(memberRegisterRequest);
        return "회원가입 성공";
<<<<<<< HEAD

=======
>>>>>>> cb3ba7f4d6b02ed54d05273b4449e2e31c7083f1
>>>>>>> master
    }

    @PostMapping("/logout")
    public void logout(HttpServletRequest request){
//        String encryptedRefreshToken = jwtTokenProvider.resolveRefreshToken(request);
//        String accessToken = jwtTokenProvider.resolveAccessToken(request);


    }

    @PostMapping("/update")
    public void update(){ // 회원정보 수정

    }
}