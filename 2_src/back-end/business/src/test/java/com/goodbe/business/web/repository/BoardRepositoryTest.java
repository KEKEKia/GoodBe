package com.goodbe.business.web.repository;

import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.member.Member;
import lombok.extern.slf4j.Slf4j;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.*;

//@SpringBootTest
//@ExtendWith(SpringExtension.class)
@DataJpaTest
@Slf4j
class BoardRepositoryTest {

    @Autowired
    private BoardRepository boardRepository;


//     this.member = member;
//        this.files = files;
//        this.attachFile = attachFile;
//        this.boardType = boardType;
//        this.nickname=nickname;
//        this.title = title;
//        this.content = content;
//        this.likeCount = likeCount;
    @Test
    public void save(){
        Member member=Member.builder().email("abc@naver.com").name("김민지").nickname("minji").build();
        Post post=Post.builder().member(member).boardType("취업준비").nickname(member.getNickname()).
                    title("안녕하세요").content("반갑습니다.").build();
        Post savedPost=boardRepository.save(post);
        log.info("post = {}",post);
        Assertions.assertThat(savedPost.getNickname()).isEqualTo(post.getNickname());

    }
}