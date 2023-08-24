package com.goodbe.business.utility;

import com.goodbe.business.domain.board.Comment;
import com.goodbe.business.domain.company.JobPost;
import com.goodbe.business.domain.member.Address;
import com.goodbe.business.domain.member.Consulting;
import com.goodbe.business.domain.member.Member;
import com.goodbe.business.domain.board.Post;
import com.goodbe.business.domain.training.Edu;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import java.time.LocalDate;
import java.time.LocalDateTime;

//@Component
@RequiredArgsConstructor
public class InitDB {
    private final InitService initService;

    @PostConstruct
    public void init(){
        initService.dbInit();
    }
    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService{
        private final EntityManager em;

        public void dbInit(){

//            Member m1=new Member("kumsh0330@naver.com","김민지","minji",
//                    "2004-05-07",
//                    "서울특별시 동대문구 겸재로 16",
//                    "여성","현대자동차","경로탐색 SW개발",false);
//            em.persist(m1);
//            Member m2=new Member("fgd@gmail.com","강해린","haerin");
//            em.persist(m2);

//            Edu t1=new Edu("ACG20223000845056","빅데이터의 개념이해와 분석역량강화",
//                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000845056&tracseTme=225&trainstCstmrId=500020055611&crseTracseSe=C0031",
//                    "러닝핏",null,"02-1600-6842","서울 마포구","");
//            em.persist(t1);
//            Edu t2=new Edu("ACG20223000845071","R을 활용한 빅데이터 및 통계분석",
//                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000845071&tracseTme=225&trainstCstmrId=500020055611&crseTracseSe=C0031",
//                    "러닝핏",null,"02-1600-6842","서울 마포구","");
//            em.persist(t2);
//            Edu t3=new Edu("ACG20223000847541","파이썬머신러닝완벽가이드",
//                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000847541&tracseTme=19&trainstCstmrId=500020014456&crseTracseSe=C0031",
//                    "(주)알파코",null,"02-2163-5724","서울 영등포구","");
//            em.persist(t3);
//            Edu t4=new Edu("ACG20223000847739","SW코딩강사 양성과정",
//                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000847739&tracseTme=49&trainstCstmrId=500020020261&crseTracseSe=C0031",
//                    "(사)한국디지털컨버전스협회",null,"02-2038-0024","서울 영등포구","");
//            em.persist(t4);
//            Edu t5=new Edu("ACG20223000847832","알아두면 쓸모 있는 신비한 사이버보안",
//                    "https://www.hrd.go.kr/hrdp/co/pcobo/PCOBO0100P.do?tracseId=ACG20223000847832&tracseTme=14&trainstCstmrId=500020014456&crseTracseSe=C0031",
//                    "(주)알파코",null,"02-2163-5724","서울 영등포구","");
//
//            em.persist(t5);

//            JobPost j1=new JobPost("K120032306130075","지코스트","정문조,6 명,0 백만원,0 백만원,호스팅 및 관련 서비스업","",
//                    "웹 또는 모바일 애플리케이션 프로그램 개발\r\n- nextJS, flutter, 앵귤러, 자바스크립트를 기반으로 한 웹/앱 개발 및 운영\r\n- restAPI, MQTT 기반 IoT 데이터, 위치정보, 맵정보를 활용한 웹/앱 개발 및 운영\r\n- 면접이전에 hands-on skill 확인과정이 있습니다.",
//                    "20230811","월급3,000,000원 이상, 면접 후 재조정 가능",",,,");
//            em.persist(j1);
//            JobPost j2=new JobPost("K120032306140003","프랜차이즈이알피연구소(주)","이창용,6 명,50 백만원,1000 백만원,경영 컨설팅업","www.franerp.com",
//                    "- PHP JAVA 활용한 웹사이트 제작\r\n(매물 정보 플랫폼 사이트 제작)\r\n- 유지 보수",
//                    "20230810","월급3,000,000원 이상 ~ 3,500,000원 이하, 면접 후 재조정 가능","응용 소프트웨어 공학(학과 : 컴퓨터ㆍ소프트웨어공학부) 응용 소프트웨어 공학(학과 : 소프트웨어개발전공),정보처리기사,네트워크관리사,,포트폴리오 제출 (제작기여도-%표시, 제작웹사이트 주소 표기 등) 우대");
//            em.persist(j2);
//            JobPost j3=new JobPost("K120032306260035","파인더솔루션","박찬희,1 명,5 백만원,5 백만원,유선 온라인 게임 소프트웨어 개발 및 공급업","",
//                    "웹.모바일 퍼블리싱 관련 업무 및 유지보수\r\n전반적인 UI 개발 (HTML/CSS/javascript)\r\n\r\n학력/성별: 무관\r\n경력 : 5년\r\n\r\n급여: 회사 내규에 따름",
//                    "채용시까지","월급3,000,000원 이상 ~ 5,000,000원 이하, 면접 후 재조정 가능",",,,");
//            em.persist(j3);
//            JobPost j4=new JobPost("K120032306270006","케어링 주식회사","김태성,150 명,0 백만원,0 백만원,방문 복지서비스 제공업","https://caring.co.kr/",
//                    "이런 일을 합니다\r\n- 요양보호사 교육 커리큘럼을 기획, 관리 및 강의합니다.\r\n- 출결 관리와 같은 교육원의 행정 업무를 담당합니다.\r\n\r\n이런 분을 모시고 있습니다\r\n(아래 중 한 가지 자격을 보유하신 분)\r\n- 대학에서 사회복지학·노인복지학·간호학 과목의 교수이신 분\r\n- 사회복지·노인복지·간호 분야의 석사 이상 학위를 가지고 있으며, 해당 분야 업무 경력이 3년 이상이신 분\r\n- 사회복지사, 간호사로서 해당 업무 경력이 3년 이상이신 분\r\n- 노인요양시설, 재가노인복지시설, 재가장기요양기관의 시설장으로서 업무 경력이 5년 이상이신 분\r\n\r\n이런 분이면 더 좋습니다\r\n- 직업능력개발훈련을 진행할 수 있는 NCS 확인강사이신 분\r\n- 직업훈련교사 자격을 보유하신 분",
//                    "채용시까지","연봉26,000,000원 이상 ~ 33,000,000원 이하, 면접 후 재조정 가능",",사회복지사,간호사,,");
//            em.persist(j4);

//            Post p1=new Post(m1,"취업준비",m1.getNickname(),"aaa","aaa",0);
//            em.persist(p1);
//            Post p2=new Post(m1,"국비교육",m1.getNickname(),"bbb","bbb", 5);
//            em.persist(p2);
//            Post p3=new Post(m2,"학습공유",m2.getNickname(),"ccc","ccc",3);
//            em.persist(p3);
//            Post p4=new Post(m2,"취뽀후기",m2.getNickname(),"ddd","ddd", 25);
//            em.persist(p4);
//            Post p5=new Post(m1,"취업준비",m1.getNickname(),"eee","eee",150);
//            em.persist(p5);
//
//            Comment c1=new Comment(m2,p1,"안녕하세요");
//            em.persist(c1);
//            Comment c2=new Comment(m2,p1,"반갑습니다.");
//            em.persist(c2);
//
//            Member member=em.find(Member.class,1L);
//            Consulting con1=new Consulting(member,em.find(Edu.class,"ACG20223000845056"), LocalDateTime.of(2023, 8, 25, 15, 00, 00));
//            em.persist(con1);
//            Consulting con2=new Consulting(member,em.find(Edu.class,"ACG20223000845071"), LocalDateTime.of(2023, 8, 25, 14, 25, 00));
//            em.persist(con2);
        }
    }
}
