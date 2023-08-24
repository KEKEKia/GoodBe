import React from 'react';
import styled from 'styled-components'
import myconsulting from '../../assets/MyConsulting/myconsulting.svg';

const MyConsultingHeader = styled.p`
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
const MyConsultingDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`
const ConsultingImg = styled.img`
    width: 400px;
    height: 200px;
    flex-shrink: 0;
    margin-left: 350px;
`
const GoodBeConsultingContainer = styled.div`
    align-items: center;
    margin-left: 350px;
    margin-top: -170px;
`;

const GoodBeConsulting = styled.p`
    color: #000;
    font-family: Istok Web;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-left: 350px;
`
const GoodBeConsultingDetail = styled.p`
    color: #6A6A6A;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-left: 350px;
`
const MyLikeEduHeader = () => {
    return (
        <div>

            <MyConsultingHeader>교육 상담 관리</MyConsultingHeader>
            <MyConsultingDetail>교육기관 상담 예약 일정을 확인하고 입장할 수 있습니다.</MyConsultingDetail>
            <ConsultingImg src={myconsulting}/>
            <GoodBeConsultingContainer>
                <GoodBeConsulting>GoodBe 교육 상담</GoodBeConsulting>
                <GoodBeConsultingDetail>원활한 상담을 위해서 예정된 회의시간보다 5분전에 입장 해주세요. 
                    <br/>마이크와 카메라를 켜주시면 더 많은 정보를 얻을 수 있습니다.</GoodBeConsultingDetail>
            </GoodBeConsultingContainer>
        </div>
    );
};

export default MyLikeEduHeader;