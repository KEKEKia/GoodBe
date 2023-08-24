package com.goodbe.business.web.service;

import com.goodbe.business.domain.company.JobPost;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.member.MemberJobPost;
import com.goodbe.business.web.repository.JobPostRepository;
import com.goodbe.business.web.repository.MemberJobPostRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class JobPostService {
    private final JobPostRepository jobPostRepository;
    private final MemberJobPostRepository memberJobPostRepository;
    @Transactional(readOnly = true)
    public Page<JobPost> jobPostList(Pageable pageable){
        return jobPostRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    public JobPost jobPostDetail(String jobPostId){
        return jobPostRepository.findById(jobPostId).orElseThrow(()->new IllegalArgumentException("존재하지 않는 채용공고입니다."));
    }
    @Transactional
    public void likeJobPost(Member member, String jobPostId){
        JobPost jobPost=jobPostRepository.findById(jobPostId).orElseThrow(() -> new IllegalArgumentException("존재하지 않는 채용고고입니다."));
        MemberJobPost memberJobPost=MemberJobPost.builder().memberId(member).jobPostId(jobPost).build();
        memberJobPostRepository.save(memberJobPost);
    }
    @Transactional
    public void unlikeJobPost(Member member, String jobPostId){
        MemberJobPost memberJobPost=memberJobPostRepository.findMemberJobPostByMemberIdAndJobPostId(member.getId(), jobPostId);
        memberJobPostRepository.delete(memberJobPost);
    }

    public boolean isLike(Long memberId, String eduId) throws Exception {
        log.info("{}, {}",memberId,eduId);
        // 이미 관심목록에 추가했으면 삭제한다.
        return memberJobPostRepository.findMemberJobPostByMemberIdAndJobPostId(memberId, eduId) != null;
    }
}
