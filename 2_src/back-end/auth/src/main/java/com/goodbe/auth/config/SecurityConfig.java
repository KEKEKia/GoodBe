package com.goodbe.auth.config;

import com.goodbe.auth.handler.AuthSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import com.goodbe.auth.service.PrincipalOauthUserService;

@Configuration
@EnableWebSecurity //시큐리티 활성화 -> 기본 스프링 필터 체인에 등록
@RequiredArgsConstructor
public class SecurityConfig  {

    @Autowired
    private PrincipalOauthUserService principalOauthUserService;

    @Autowired
    private CorsConfig corsConfig;

    @Autowired
    private AuthSuccessHandler authSuccessHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http

                .cors().configurationSource(corsConfig.corsConfigurationSource()) // CORS 설정 사용
                .and()
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/auth/login/google").permitAll()
                .antMatchers("/auth/jwt/decoding").permitAll()
                .antMatchers("/auth/signup").permitAll()
                .antMatchers("/user/**").authenticated() // 인증된 사용자에게만 접근 허용
                .antMatchers("/manager/**").hasAuthority("MANAGER") // "MANAGER" 역할을 가진 사용자에게만 접근 허용
                .antMatchers("/admin/**").hasAuthority("ADMIN") // "ADMIN" 역할을 가진 사용자에게만 접근 허용
                .anyRequest().permitAll()
                // oAuth2 소셜로그인
                .and()
                .oauth2Login()
                .userInfoEndpoint()
                .userService(principalOauthUserService)// 소셜 로그인이 완료된 뒤의 후처리가 필요함 . Tip.코드x, (엑세스 토큰+사용자 프로필 정보를 받아옴)
                .and()
                .successHandler(authSuccessHandler);
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }
}
