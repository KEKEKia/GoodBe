import React from 'react';
import styled from 'styled-components'
import TeamInfo from '../../assets/TeamInfo/TeamInfo.svg';

const MyTeamHeader = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top : 30px;
    
`
const MyTeamDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-bottom: 40px;
`

const Teamimg = styled.img`
    width: 900px;
    height: 900px;
    flex-shrink: 0;
    margin-left : 330px;
    display: block;
    display: block; 
    margin: 0 auto;
`

const MyPageTeamHeader = () => {
    return (
        <div>

            <MyTeamHeader>팀 정보</MyTeamHeader>
            <MyTeamDetail>GoodBe를 개발한 개발자들을 소개합니다</MyTeamDetail>
            <Teamimg src={TeamInfo} alt="TeamInfo" />
        </div>
    );
};

export default MyPageTeamHeader;


