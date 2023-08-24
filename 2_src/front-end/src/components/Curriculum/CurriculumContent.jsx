import React from 'react';
import styled from 'styled-components';


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

const Box = styled.div`
    width: 802.95px;
    height: 77.958px;
    flex-shrink: 0;
    background: rgba(217, 217, 217, 0.30);
`


const EduDetailContent = () => {

    return (
        <Container>
        
        <InfoHeader>사전 캠프</InfoHeader>
          <div>
              <p>웹개발 흐름과 sQL 기본기를 다져 웹개발의 출발 선상에 서게 됩니다.</p>
              <Box>
                <li>웹 개발 종합반 수강으로 웹 개발 전반에 대한 흐름을 익힙니다.</li>
                <li>이후 백엔드 개발 시 필수적인 database에 대한 선수 지식으로 sQL 기본기를 다집니다.</li>
              </Box>
        

            </div>

        <InfoHeader>프로그래밍 기초 주차</InfoHeader>
          <div>
                <p>본격적인 주특기 학습에 앞서 필요한 언어 기본기를 갖추게 됩니다.</p>
                <Box>
                    <li>주특기로 선택한 python에 대한 기초/심화 학습을 진행합니다. </li>
                    <li>협업을 수훨하게 도와줄 Git에 대해 학습하고 실습해 봅니다. </li>
                </Box>
            </div>
        <InfoHeader>주특기 기초 주차</InfoHeader>
            <div>
                <p>앞으로 나의 주특기로 가져갈 언어와 프레임워크에 대한 기초 역량을 키우게 됩니다.</p>
                <Box><li>개인 과제를 통해 프레임워크 사용에 대한 이해도를 높입니다.</li></Box>
            </div>
        
          </Container>

    );
};

export default EduDetailContent;