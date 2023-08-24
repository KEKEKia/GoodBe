package com.goodbe.business.web.dto.mypage;

import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.domain.member.Address;
import com.goodbe.business.domain.member.Member;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Schema(description = "마이페이지 회원정보 수정 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberUpdateRequest {

    private UploadFile profileImage;
    private String name;
    private String nickname;
    private LocalDate birth;
    private String address;
    private String favoriteCompany;
    private String favoriteJob;

    public MemberUpdateRequest(String name, String nickname, LocalDate birth,
                               String address, String favoriteCompany, String favoriteJob) {
        this.name = name;
        this.nickname = nickname;
        this.birth = birth;
        this.address = address;
        this.favoriteCompany = favoriteCompany;
        this.favoriteJob = favoriteJob;
    }
}
