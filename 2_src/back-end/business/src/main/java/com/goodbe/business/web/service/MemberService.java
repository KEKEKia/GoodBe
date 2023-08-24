package com.goodbe.business.web.service;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.file.FileStore;
import com.goodbe.business.domain.file.UploadFile;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.dto.board.post.PostUpdateRequest;
import com.goodbe.business.web.dto.member.MemberRegisterRequest;
import com.goodbe.business.web.dto.mypage.MemberUpdateRequest;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.web.repository.MemberRepository;
import com.goodbe.business.web.repository.UploadFileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.reactive.function.client.WebClient;
import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class MemberService { // 테스트용이므로 배포 버전에선 삭제해야함
    private final MemberRepository memberRepository;
    private final UploadFileRepository uploadFileRepository;
    private final FileStore fileStore;


    public void register(MemberRegisterRequest request){
        memberRepository.save(request.toEntity());
    }
    public Member findById(Long memberId){

        return memberRepository.findById(memberId).orElseThrow(()->new NoSuchElementException("해당 회원이 없습니다. id="+memberId));
    }

    public Member findByEmail(String email){
        return memberRepository.findByEmail(email);
    }

    public void update(Long memberId, MultipartFile profileImage, MemberUpdateRequest request) throws IOException {
        Member member = memberRepository.findById(memberId).orElseThrow(()-> new NoSuchElementException("해당 회원이 없습니다. id="+memberId));

        if(profileImage != null){
            UploadFile attachFile = fileStore.storeFile(profileImage);
            request.setProfileImage(attachFile);
            attachFile.setMember(member);
            uploadFileRepository.save(attachFile);
        }
        member.update(request);
    }
}
