package com.goodbe.auth.controller;

import com.goodbe.auth.domain.Member;
import com.goodbe.auth.jwt.JwtTokenProvider;
import com.goodbe.auth.repository.MemberRepository;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import io.jsonwebtoken.Claims;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Api(tags = "Auth 서버 컨트롤러")
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;
    private static final Logger log = LoggerFactory.getLogger(AuthController.class);

    @ApiOperation(value = "구글 소셜로그인", notes = "구글 로그인폼으로 리다이렉션")
    @GetMapping("/login/google")
    public void googleLogin(HttpServletResponse response) throws IOException {
        response.sendRedirect("/oauth2/authorization/google");
    }

    @ApiOperation(value = "JWT AccessToken 복호화", notes = "엑세스토큰 받아서 사용자 이메일 리턴")
    @GetMapping("/jwt/decoding")
    public String getEmailByJwt(HttpServletRequest request) {
        String accessToken = request.getHeader("Authorization");
        Claims claims = jwtTokenProvider.parseClaims(accessToken);
        String userName = claims.getSubject();
        Member memberEntity = memberRepository.findByUsername(userName);
        String email = memberEntity.getEmail();
        log.info("email: {}", email);
        return email;
    }

    @ApiOperation(value = "사용자의 회원가입폼 작성 여부 저장", notes = "엑세스토큰 확인해서 DB에 가입 여부 저장")
    @PutMapping("/signup")
    public ResponseEntity<?> updateMemberSignUp(String accessToken){
        Claims claims = jwtTokenProvider.parseClaims(accessToken);
        String userName = claims.getSubject();
        Member memberEntity = memberRepository.findByUsername(userName);
        memberEntity.setIsSignUp(true);
        memberRepository.save(memberEntity);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }
}
