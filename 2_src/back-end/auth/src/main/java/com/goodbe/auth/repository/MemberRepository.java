package com.goodbe.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.goodbe.auth.domain.Member;
import java.util.Optional;


public interface MemberRepository extends JpaRepository<Member, Long> {

    // 이걸로 인증 작동
    Optional<Member> findByMemberId(String userId);

    Member findByUsername(String username);

    Member findByEmail(String email);

    Optional<Member> findById(Long userId);
}
