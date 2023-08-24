import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NaverInc from '../../assets/JobDetail/NaverInc.svg';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const API_BASE_URL = 'https://i9a801.p.ssafy.io/';


const CustomDiv = styled.div`
  margin-left: 17rem;
`;

const CustomH3 = styled.h3`
  margin-left: 5rem;
  font-size: 2vw; /* vw 단위로 글자 크기 지정 */
  color: grey;
`;

const CustomH2 = styled.h2`
  font-style: normal;
  margin-left: 5rem;
  font-size: 3vw; /* vw 단위로 글자 크기 지정 */
  font-weight: bold;
`;

const CustomHr = styled.hr`
  align: right;
  width: 80%;
  color: black;
  margin-left: 5rem;
`;

const CustomBox = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80vw; /* viewport의 80% 크기로 지정 */
  max-width: 60rem; /* 최대 가로 크기 설정 */
  height: auto; /* 높이 자동 조정 */
  background-color: '';
  border-color: grey;
  border: 1px solid grey;
  padding: 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 5rem;
  padding-right: 10rem;
`;

const Image = styled.img`
  width: 60vw; /* viewport의 60% 크기로 지정 */
  height: auto; /* 높이 자동 조정 */
`;

const StyledLink = styled.a`
  display: inline-block;
  margin-left: auto;
  font-size: 1.5rem;
  color: grey;
  text-decoration: underline;
  text-align: right; 
  font-family : Istok Web;
`;

const RightAlignedContainer = styled.div`
  display: flex;
  margin-right: 25%; 
`;

function getId(location) {
  var searchString = location.search;
  const params = new URLSearchParams(searchString);
  const keyword = params.get('id');
  return keyword
}


export default function JobDetailContent() {


    const location = useLocation();
    const keyword = getId(location);
    const [jobData, setJobData] = useState(null);
    
    useEffect(() => {
      
      axios.get(`${API_BASE_URL}/search/jobpost/id/${keyword}`)
        .then(function (response) {
          console.log(response.data);
          setJobData(response.data);
          console.log(keyword);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, [keyword]);
  
  
    if (!jobData) {
      return <div>{jobData}</div>;
    }


  return (
    <CustomDiv>
      <div style={{ fontStyle: '', fontSize: '2vw', fontWeight: 'bold' }}>Naver I&S</div>
      <CustomH3>
        {jobData.companyName}
      </CustomH3>
      <br />
      <CustomBox>
        <ContentContainer>
          <div>
            <br/>
            <strong>지원자격</strong>
            <br/>
            <p>연관직종 :{jobData.certificate}</p>
            <p>학력 : {jobData.degree}</p>
          </div>
         
          <div>
            <br/>
            <strong>근무조건</strong>
            <br/>
            <p>근무시간 : {jobData.employmentForm}</p>
            <p>급여 : {jobData.sal}</p>
          </div>

          <div>
            <br/>
            <strong>근무조건</strong>
            <br/>
            <p>근무시간 : {jobData.employmentForm}</p>
            <p>급여 : {jobData.sal}</p>
            <br/>
          </div>

          <div>
            <br/>
            <strong>근무 여건</strong>
            <br/>
            <p>근무장소 : {jobData.address}</p>
            <p>세부 : {jobData.jobContent}</p>
            <br/>
          </div>
          
        </ContentContainer>
      </CustomBox>
      {/* <Image src={NaverInc} alt="NaverInc" /> */}
      <br/>
      <br/>
      <br/>
      <RightAlignedContainer>
      <StyledLink href='http://www.naver.com'>채용 바로 가기  </StyledLink>
      </RightAlignedContainer>
    </CustomDiv>
  );
}
