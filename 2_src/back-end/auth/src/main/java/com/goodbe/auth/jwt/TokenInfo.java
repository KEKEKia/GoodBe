package com.goodbe.auth.jwt;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@Data
@AllArgsConstructor
public class TokenInfo {
    private String grantType;  // 인증타입. Bearer인 경우 JWT 혹은 OAuth에 대한 토큰을 사용한다는 뜻 (RFC 6750)
    private String accessToken;
    private String refreshToken;
}