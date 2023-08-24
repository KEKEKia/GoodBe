package com.goodbe.auth.service;

import com.goodbe.auth.oauth2.provider.GoogleUserInfo;
import com.goodbe.auth.oauth2.provider.OAuth2UserInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import com.goodbe.auth.oauth2.PrincipalDetails;
import com.goodbe.auth.domain.Role;
import com.goodbe.auth.domain.Member;
import com.goodbe.auth.repository.MemberRepository;
import java.time.LocalDateTime;


@Service
public class PrincipalOauthUserService extends DefaultOAuth2UserService {

    @Autowired
    private MemberRepository memberRepository;

    private static final Logger log = LoggerFactory.getLogger(PrincipalOauthUserService.class);

    //구글, 카카오, 네이버로 부터 받은 userRequest 데이터에 대한 후처리되는 함수
    //함수 종료시 @AuthenticationPrincipal 어노테이션이 만들어진다.
    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        //"registraionId" 로 어떤 OAuth 로 로그인 했는지 확인 가능(google,naver등)
        log.info("ClientRegistration :{}",userRequest.getClientRegistration());
        log.info("AccessToken :{}",userRequest.getAccessToken().getTokenValue());
        log.info("Attributes :{}",super.loadUser(userRequest).getAttributes());
        //구글 로그인 버튼 클릭 -> 구글 로그인창 -> 로그인 완료 -> code를 리턴(OAuth-Clien라이브러리가 받아줌) -> code를 통해서 AcssToken요청(access토큰 받음)
        // => "userRequest"가 담고 있는 정보
        //회원 프로필을 받아야하는데 여기서 사용되는것이 "loadUser" 함수이다 -> 구글 로 부터 회원 프로필을 받을수 있다.
        /**
         *  OAuth 로그인 정보를 이용한 회원 가입
         */
        OAuth2User oAuth2User = super.loadUser(userRequest);
        OAuth2UserInfo oAuth2UserInfo =null;
        if(userRequest.getClientRegistration().getRegistrationId().equals("google")) {
            oAuth2UserInfo = new GoogleUserInfo(oAuth2User.getAttributes());
        } else{
            System.out.println("지원하지 않은 로그인 서비스 입니다.");
        }
        String provider = oAuth2UserInfo.getProvider(); //google , naver, facebook etc
        String providerId = oAuth2UserInfo.getProviderId();
        String username = provider + "_" + providerId;
        String email = oAuth2UserInfo.getEmail();
        Role role = Role.USER; // 지금은 전부 USER로 설정. 후에 ADMIN 계정도 만들어야 함.
        Member memberEntity = memberRepository.findByUsername(username);
        // 최초 방문인 경우 Auth DB에 사용자 정보 저장
        if(memberEntity == null){
            LocalDateTime createTime = LocalDateTime.now();
            memberEntity = Member.builder()
                    .memberId(email)
                    .username(username)
                    .password(email)
                    .email(email)
                    .role(role)
                    .provider(provider)
                    .provideId(providerId)
                    .createDate(createTime)
                    .isSignUp(false)
                    .build();
            memberRepository.save(memberEntity);
        }
        return new PrincipalDetails(memberEntity, oAuth2User.getAttributes());
    }
}
