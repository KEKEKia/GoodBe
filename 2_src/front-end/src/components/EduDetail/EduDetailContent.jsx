import React, { useEffect, useState } from 'react';
import axios from 'axios';
import calendarpad from '../../assets/EduDetail/calendarpad.svg';
import creditcard from '../../assets/EduDetail/creditcard.svg';
import notepad from '../../assets/EduDetail/notepad.svg';
import books from '../../assets/EduDetail/books.svg';
import styled from 'styled-components';
import { useParams } from 'react-router-dom'; // useParams를 추가
import { useLocation } from 'react-router-dom'; // useLocation 추가
import './edu.css';

const API_BASE_URL = 'https://i9a801.p.ssafy.io';

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


const EduDetailContent = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eduId = searchParams.get('eduId');
  const [eduData, setEduData] = useState(null);
  const imgStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px'
  };

  useEffect(() => {
    // Send a GET request to fetch edu information based on eduId
    axios
      .get(`${API_BASE_URL}/api/edu/view/${eduId}`)
      .then(function (response) {
        console.log(response.data);
        setEduData(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching edu data:', error);
      });
  }, [eduId]);

  return (
    <Container>

    
        {/* Check if eduData is available before rendering */}
        {eduData && (
          <div>

            
            <a id="company" href={eduData.companyLink}>[{eduData.company}]</a>
            <a id="eduTitle" href={eduData.titleLink}>과정명 {eduData.title}</a>
            <div id="eduAddress">{eduData.address}</div>


            <div id="eduTel">전화번호 {eduData.tel}</div>
            <div id="eduMax">정원 {eduData.man}명</div>

            <InfoHeader><img src={calendarpad}
        alt="calenderpad" style={imgStyle} />일정 및 수업</InfoHeader>
         <div id="eduPeriod">기간 {eduData.period}</div>
      <InfoHeader><img src={creditcard} alt="creditcard" style={imgStyle} />수강료 및 지원금</InfoHeader>
      <div id="eduExpense">교육비 {eduData.expense}원</div>
          <span>무료</span>
          <span> KDT(내배카 내일배움카드가 필요해요)</span>
          <span>지원금</span>
          <span> 훈련장려금 월 11만 6천원</span>
          <p> 특별훈련수당 월 20만원</p>
          </div>
 
        )}
      
      

      <InfoHeader><img src={notepad} alt="notepad" style={imgStyle} />지원절차</InfoHeader>
      <div>
        <span>{`신청서(서류) `}</span>
        <span>{`-> `}</span>
        <span>{`인터뷰(비대면) `}</span>
        <span>{`->`}</span>
        <span>{` hRD-Net 수강신청 `}</span>
        <span>{`->`}</span>
        <span> 합격 여부 설정</span>
      </div>
      <InfoHeader><img src={books} alt="books" style={imgStyle} />사전지식</InfoHeader>
      <div>
        <p>필수</p>
        <p>
          본 과정 시작 전, 사전 캠프에서 강의 수강과 팀과제를 통해 aI 개발
          기초를 다집니다
        </p>
      </div>
    </Container>

  );
};

export default EduDetailContent;