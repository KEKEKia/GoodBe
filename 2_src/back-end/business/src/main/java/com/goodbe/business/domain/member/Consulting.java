package com.goodbe.business.domain.member;

import com.goodbe.business.domain.training.Edu;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.FetchType.LAZY;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Consulting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="consulting_id")
    private Long id;

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "member_id")
    private Member member; // 교육

    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "edu_id")
    private Edu edu; // 교육

    @Column(nullable = false)
    private LocalDateTime reserveTime; // 예약 시간

    @Builder
    public Consulting(Member member, Edu edu, LocalDateTime reserveTime) {
        this.member = member;
        this.edu = edu;
        this.reserveTime = reserveTime;
    }
}
