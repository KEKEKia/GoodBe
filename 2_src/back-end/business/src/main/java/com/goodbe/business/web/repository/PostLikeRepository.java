package com.goodbe.business.web.repository;

import com.goodbe.business.domain.board.PostLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostLikeRepository extends JpaRepository<PostLike,Long> {
    PostLike findPostLikeByMemberIdAndPostId(Long memberId,Long postId);
}
