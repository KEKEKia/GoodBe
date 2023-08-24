import React from 'react';
import styled from 'styled-components'

const MyLikeEduTitle = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    
`
const MyLikeEduDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`
const MyLikeEduHeader = () => {
    return (
        <div>

            <MyLikeEduTitle>관심 채용공고 관리</MyLikeEduTitle>
            <MyLikeEduDetail>지르나르님이 관심을 표시한 채용공고 목록입니다</MyLikeEduDetail>
        </div>
    );
};

export default MyLikeEduHeader;