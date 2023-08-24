package com.goodbe.business.web.controller;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@RestController
@RequiredArgsConstructor
public class TestController {
    private final MemberRepository memberRepository;

    @GetMapping("/findtest/{email}")
    public void member(@PathVariable String email){
        Member member=memberRepository.findByEmail(email);
        log.info("{}",member.getNickname());
    }
    @GetMapping("/error-404")
    public void error404(HttpServletResponse response) throws IOException {
        response.sendError(404, "404 오류!");
    }
    @GetMapping("/error-500")
    public void error500(HttpServletResponse response) throws IOException {
        response.sendError(500);
    }
}
