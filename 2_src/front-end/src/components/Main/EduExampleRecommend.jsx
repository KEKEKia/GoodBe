import React from 'react';
import styled from 'styled-components';
import KHimg from '../../assets/main/KHimg.svg';


const GoToLogin = styled.a`
    color: #000;
    text-align: left;
    font-family: Istok Web;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    text-decoration: none;
    display: flex;
`
const Container = styled.div`
    margin-left: 220px; /* Center horizontally */
    margin-right: auto; /* Center horizontally */
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 1300px;
`

const RecommendHeader = styled.p`
    color: #000;
    text-align: left;
    font-family: Istok Web;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top : 20px;
`
const NaverBackend = styled.p`
    color: #595959;
    font-family: Istok Web;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`

const NaverBackendBox = styled.div`
    width: 1100px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #FFD1D1;
    padding: 20px;
    display: flex;
    align-items: right;
    justify-content: space-between;
`;

const MoreInfo = styled.a`
    color: #5F5F5F;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    text-decoration: none;
    cursor: pointer;
`;

const Eduimg = styled.img`
    width: 200px;
    height: 50px;
    flex-shrink: 0;

`

const EduContainer = styled.div`
    fill: #FFF;
    stroke-width: 1px;
    stroke: #ACACAC;
    border: 1px solid #ACACAC; 
    border-radius: 10px;
    padding-left: 55px; 
    padding-right: 55px; 
    padding-top:10px;
    padding-bottom:10px;
    width: calc((100%-30px) / 3);

`

const Edutitle = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

const EduDetail = styled.p`
    color: #565656;
    text-align: center;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

const OnOff = styled.p`
    color: #001E0C;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    fill: #9CF49A;
    margin-right: 10px;
    margin-right: 10px;
    background-color: #9CF49A; 
    padding: 5px 10px; 
    border-radius: 5px; 

`
const EduDate = styled.p`
    color: #00101E;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    fill: #9AF4EE;
    background-color: #9AF4EE; 
    padding: 5px 10px; 
    border-radius: 5px; 
`
const Row = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center; 
    width: 100%;
    
`;

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1100px;
    margin-bottom: 20px;
`;

const EduInfoRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
`;

const EduExampleRecommend = () => {
    const dummyData = [
        { id: 1, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정', on_off: '대면', Date:'주5일', image:KHimg},
        { id: 2, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정',on_off: '대면',Date:'주5일', image:KHimg},
        { id: 3, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정', on_off: '대면', Date:'주5일', image:KHimg },
    
    ]
    return (
        <Container>
            <Row>
                <GoToLogin>😊 로그인 하고, 맞춤 교육정보를 확인하세요</GoToLogin>
            </Row>
            <Row>
                <RecommendHeader>👾 굿비 추천 교육</RecommendHeader>
            </Row>
            <NaverBackendBox>
                <NaverBackend>네이버 백엔드 <br />지원자들이 관심있는</NaverBackend>
                <MoreInfo>더보기</MoreInfo>
            </NaverBackendBox>
        
            <RowContainer>
                {dummyData.map((item) => (
                    <EduContainer key={item.id}>
                        <Eduimg src={KHimg} alt="KHimg" />
                        <Edutitle>{item.Edutitle}</Edutitle>
                        <EduDetail>{item.EduDetail}</EduDetail>
                        <EduInfoRow>
                            <OnOff>{item.on_off}</OnOff>
                            <EduDate>{item.Date}</EduDate>
                        </EduInfoRow>
                    </EduContainer>
                ))}
            </RowContainer>
                


        </Container>
    );
};

export default EduExampleRecommend;