package com.goodbe.business.web.dto.mypage;

import com.goodbe.business.domain.member.Address;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.dto.file.UploadFileResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Schema(description = "마이페이지 회원정보 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MemberInfoResponse {

    private UploadFileResponse profileImage;
    private String email;
    private String name;
    private String nickname;
    private LocalDate birth;
    private String address;
    private String favoriteCompany;
    private String favoriteJob;


    @Builder
    public MemberInfoResponse(Member entity) {
        if(entity.getProfileImage() != null) this.profileImage = new UploadFileResponse(entity.getProfileImage());
        this.email = entity.getEmail();
        this.name = entity.getName();
        this.nickname = entity.getNickname();
        this.birth = entity.getBirth();
        this.address = entity.getAddress();
        this.favoriteCompany = entity.getFavoriteCompany();
        this.favoriteJob = entity.getFavoriteJob();
    }
}
