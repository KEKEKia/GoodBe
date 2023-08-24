package com.goodbe.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowCredentials(true);
        // *로 했을때 적용이 안된다는 얘기가 있어서 하나하나 추가해 봄
        configuration.addAllowedOrigin("*"); // 허용할 출처 설정, *는 모든 출처를 허용
        configuration.setAllowedOrigins(List.of("http://localhost:3000","http://localhost:8080","http://localhost:8081"));
        configuration.setAllowedOrigins(List.of("http://i9a801.p.ssafy.io:3000","http://i9a801.p.ssafy.io:8080","http://i9a801.p.ssafy.io:8081"));
        configuration.addAllowedMethod("*"); // 허용할 HTTP 메서드 설정, *는 모든 메서드를 허용
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));
        configuration.addAllowedHeader("*"); // 허용할 헤더 설정, *는 모든 헤더를 허용
        configuration.setExposedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration); // 모든 경로에 대해 CORS 설정 적용

        return source;
    }
}









