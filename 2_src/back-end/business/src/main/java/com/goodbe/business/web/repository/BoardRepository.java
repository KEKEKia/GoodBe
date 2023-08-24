package com.goodbe.business.web.repository;

import com.goodbe.business.domain.board.Post;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<Post,Long> {
    List<Post> findByMemberId(Long memberId);
}
