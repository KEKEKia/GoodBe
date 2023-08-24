package com.goodbe.business.web.dto.mypage;

import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.dto.file.UploadFileResponse;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AccessLevel;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Schema(description = "마이페이지 - 초기 화면 응답 DTO")
@Data
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyPageResponse {
    private String nickname;
    private UploadFileResponse profileImage; // 프로필 사진

    public MyPageResponse(Member entity) {
        this.nickname = entity.getNickname();
        if(entity.getProfileImage() != null) this.profileImage = new UploadFileResponse(entity.getProfileImage());
    }
}
