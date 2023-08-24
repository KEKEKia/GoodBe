package com.goodbe.business.web.service;

import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.member.MemberEdu;
import com.goodbe.business.domain.training.Edu;
import com.goodbe.business.exception.ReservedConsultingException;
import com.goodbe.business.web.repository.ConsultingRepository;
import com.goodbe.business.web.repository.EduRepository;
import com.goodbe.business.web.repository.MemberEduRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class EduService {
    private final EduRepository eduRepository;
    private final MemberEduRepository memberEduRepository;
    private final ConsultingRepository consultingRepository;

    public List<Edu> findEdus(){
        return eduRepository.findAll();
    }
    public List<Edu> findRandomEdus(){
        return eduRepository.findByRand();
    }
    public Edu findById(String id){
        return eduRepository.findById(id).orElseThrow(()->new IllegalArgumentException("존재하지 않는 교육입니다."));
    }
    @Transactional
    public void reserveConsulting(Member member, String eduId, LocalDateTime time){
        Edu edu=eduRepository.findById(eduId).orElseThrow(()->new IllegalArgumentException("존재하지 않는 교육입니다."));
        log.info("time = {}",time);
        DateTimeFormatter formatter=DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        if(consultingRepository.findByEduIdAndReserveTime(eduId,time) != null){
            throw new ReservedConsultingException("이미 예약된 시간입니다.");
        }
        Consulting consulting=new Consulting(member,edu,time);
        consultingRepository.save(consulting);
    }
    @Transactional
    public void likeEdu(Member member,String eduId){
        Edu edu=eduRepository.findById(eduId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 교육입니다."));
        MemberEdu memberEdu=MemberEdu.builder().memberId(member).eduId(edu).build();
        log.info("memberEdu 정보 = {}, {}",memberEdu.getMemberId().getName(),memberEdu.getEduId().getCompany());
        memberEduRepository.save(memberEdu);
    }
    @Transactional
    public void unlikeEdu(Member member,String eduId){
        MemberEdu memberEdu=memberEduRepository.findMemberEduByMemberIdAndTrprId(member.getId(), eduId);
        memberEduRepository.delete(memberEdu);
    }

    public Edu eduDetail(String eduId){
        return eduRepository.findById(eduId).orElseThrow(()-> new IllegalArgumentException("존재하지 않는 교육입니다."));
    }

    public boolean isLike(Long memberId, String eduId) throws Exception {
        log.info("{}, {}",memberId,eduId);
        // 이미 관심목록에 추가했으면 삭제한다.
        return memberEduRepository.findMemberEduByMemberIdAndTrprId(memberId, eduId) != null;
    }
}
