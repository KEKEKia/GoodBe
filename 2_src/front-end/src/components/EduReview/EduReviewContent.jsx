import React from 'react';
import styled from 'styled-components';
import eduimg from '../../assets/EduReview/eduimg.svg';
import lightbulb from '../../assets/EduReview/lightbulb.svg';

const InfoHeader = styled.p`
    color: #000;
    text-align: left;
    font-family: Istok Web;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`
const Container = styled.div`
    border-radius: 10px;
    border: 1px solid #838383;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align: left;
    margin-left: 50vh;
    padding: 20px;
    width: 800px;
    margin: auto;
`
const ImageBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
const BackgroundBox = styled.div`
    background-color: #f0f0f0;
    padding: 5px; 
    border-radius: 5px;
    display: inline-block;
    line-height: 2.3;
`
const RevieWTItle = styled.div`
    color: #000;
    text-align: left;
    font-family: Istok Web;
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`
const HrdLink = styled.div`
    width: 757px;
    height: 92px;
    flex-shrink: 0;
    background: rgba(64, 177, 206, 0.13);
    p {
        color: #000;
        font-family: Istok Web;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-transform: capitalize;
    }

    a {
        color: #17A1FA;
        font-family: Istok Web;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        text-decoration-line: underline;
        text-transform: capitalize;
    }

`
const EduDetailContent = () => {

    return (
        <Container>
            <InfoHeader>Good BE 후기(1)</InfoHeader>
        
                <ImageBox>
                    <img src={eduimg} alt="eduimg" />
                    <BackgroundBox>

                    <RevieWTItle>최고의 교육</RevieWTItle>
                    <p>취업을 하기 위해 본격적으로 코딩을 배우고 싶다는 생각에 국비지원 과정을 알아보았다. 서울까지 왔다갔다하기에는 체력적으로 힘들 것 같아서 온라인 부트캠프위주로 검색했고...</p>
                    </BackgroundBox>

                </ImageBox>

            <InfoHeader>블로그 후기(3)</InfoHeader>
                <ImageBox>
                    <img src={eduimg} alt="eduimg" />
                    <BackgroundBox>

                    <RevieWTItle>최고의 교육</RevieWTItle>
                    <p>취업을 하기 위해 본격적으로 코딩을 배우고 싶다는 생각에 국비지원 과정을 알아보았다. 서울까지 왔다갔다하기에는 체력적으로 힘들 것 같아서 온라인 부트캠프위주로 검색했고...</p>
                    </BackgroundBox>

                </ImageBox>

                <ImageBox>
                    <img src={eduimg} alt="eduimg" />
                    <BackgroundBox>

                    <RevieWTItle>최고의 교육</RevieWTItle>
                    <p>취업을 하기 위해 본격적으로 코딩을 배우고 싶다는 생각에 국비지원 과정을 알아보았다. 서울까지 왔다갔다하기에는 체력적으로 힘들 것 같아서 온라인 부트캠프위주로 검색했고...</p>
                    </BackgroundBox>

                </ImageBox>
            <HrdLink>
                <p><img src={lightbulb} alt="lightbulb" />HRD 페이지에서도 후기를 확인해보세요.</p>
                <a href="#">교육과정 HRD 페이지 바로가기</a>

            </HrdLink>
            
          </Container>

    );
};

export default EduDetailContent;