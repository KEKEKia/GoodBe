package com.goodbe.business.web.dto.member;

import com.goodbe.business.domain.member.Address;
import com.goodbe.business.domain.member.Member;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

import java.time.LocalDate;


@Schema(description = "회원가입 요청 DTO")
@Data
public class MemberRegisterRequest {
    private String name; // 실명
    private String email;
    private String nickname; // 닉네임
    private String  address;
    private String birth; // 생년월일
    private String favoriteCompany;
    private String favoriteJob;

    public Member toEntity(){
        return Member.builder().name(name).email(email).nickname(nickname)
                .address(address).birth(birth).favoriteCompany(favoriteCompany).favoriteJob(favoriteJob).build();
    }
}
