import React from 'react';
import styled from 'styled-components'
import myedulike from '../../assets/MyPageHome/myedulike.svg';
import myinfochange from '../../assets/MyPageHome/myinfochange.svg';
import myjoblike from '../../assets/MyPageHome/myjoblike.svg';
import myreservation from '../../assets/MyPageHome/myreservation.svg';
import mywrite from '../../assets/MyPageHome/mywrite.svg';
import team from '../../assets/MyPageHome/team.svg';


const Box = styled.div`
    display: flex;
    align-items: flex-start;
    background: #FFF;
    padding: 30px;
    margin-bottom: 10px;
    width: 750px; 
    border-radius: 10px;
    border: 1px solid #64686C;
    background: #FFF;
    height : 250px;
`
const Image = styled.img`
    margin-bottom: auto;
    width: 230px;

`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 10px;
`

const AnchorLink = styled.a`
    color: #0432D6;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    text-decoration: none;
`;

const Title = styled.p`
    color: #000;
    font-family: Istok Web;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

const Detail = styled.p`
    color: #64686C;
    text-align: right;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`
const HorizontalLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: #64686c;
    margin-top: 30px;
    margin-bottom: 30px;
`;
const MypageHome = () => {
    const dummyData = [
        { id: 1, title :'개인정보수정 및 맞춤 회사, 직무 설정', detail: '희망 회사와 직무를 설정하면 맞춤 교육정보를 안내해드립니다.', image:myinfochange, url: '/MyInfoChange', text: '개인정보 수정 및 관리>'},
        { id: 2, title :'교육 상담 예약 내역 확인', detail: '교육 상담을 통해 궁금한 점들을 질문하고 답변받을 수 있습니다.', image:myreservation, url: '/MyConsulting', text: '교육 상담 내역 확인>'},
        { id: 3, title :'관심 교육과정 관리', detail: '관심을 표시한 교육과정 리스를 확인 할 수 있습니다.', image:myedulike, url: '/MyEduLike', text: '관심 교육과정 관리>'},
        { id: 4, title :'관심 채용공고 관리', detail: '관심을 표시한 채용공고들을 확인하고 지원할 수 있습니다.', image:myjoblike, url: '/MyJobLike', text: '관심 채용공고 관리>'},
        { id: 5, title :'내가 쓴 글 관리', detail: '작성한 글을 확인하고 수정 및 삭제 가능합니다.', image:mywrite, url: '/MyBoard', text: '내가 쓴 글 관리>'},
        { id: 6, title :'문의 및 개발팀 보기', detail: '굿비를 만든 개발자들과 소통하고 문의 할 수 있습니다.', image:team, url: '/TeamInfo', text: '문의하기>'},

      ];
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '80vh',
        marginLeft: '400px',
        marginTop: '-400px',
        
    }
    return (
        <div style={containerStyle}>
        {dummyData.map((data, index) => (
          <Box key={data.id}>
            <Image src={data.image} alt="Image" style={index === 1 || index === 2 || index === 5 || index === 6 ? { order: 1 } : {}} />
            <div style={index === 2 || index === 4 ? { marginRight: '65px' } : {}}>

            <TextContainer>
              <Title>{data.title}</Title>
              <Detail>{data.detail}</Detail>
              <HorizontalLine />
                <AnchorLink href={data.url}>{data.text}</AnchorLink>
            </TextContainer>
            </div>
          </Box>
        ))}
      </div>
    );
};

export default MypageHome;