import { React, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import hyundai from '../../assets/MyJobLike/hyundai.svg';
import samsung from '../../assets/MyJobLike/samsung.svg';
import sinhan from '../../assets/MyJobLike/sinhan.svg';
import sk from '../../assets/MyJobLike/sk.svg';


const API_BASE_URL = 'http://localhost:8080';

const JobButton = styled.button`
    border-radius: 10px;
    border: 1px solid #c0d9ff;
    background: #c0d9ff;
    color: #4a2dff;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-right: 100px;
    padding: 5px;
    margin-left: 965px;
    margin-bottom: 20px;
`;

const JobName = styled.p`
  font-family: Istok Web;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;

`;

const JobDetail = styled.p`
  font-family: Istok Web;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  color: #64686c;
  text-align: left;
  margin-left: 10px;

`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px; 
  align-items: center;
  justify-content: center;
  margin-left: 400px;
  width: 700px;
  height: 100%;
  margin-bottom : 100px;
`;

const JobItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid #A7A7A7;
  background: rgba(255, 255, 255, 0.45);
  text-align: left;
  padding: 10px;
  height: 100%;
`;

const JobImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid #A7A7A7;
`;

const LinkStyle = styled.a`
    color: #000;
    font-family: Yuji Syuku;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    margin-left: 10px;
    margin-bottom: 10px;
    /* hover 상태일 때 커서 모양을 변경 */
    &:hover {
      cursor: pointer;
    }
`
 
const MyLikeEduList = () => {
  const [myJobLike, setmyJobLike] = useState([]); 
    

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/mypage/job-post`)
      .then(function (response) {
        console.log(response.data);
        setmyJobLike(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }, []); 

  return (
    <div>
      <JobButton>채용공고 둘러보기</JobButton>
      <Container>
        {myJobLike.map((item) => (
          <JobItemContainer key={item.id}>
            {/* <JobImage src={item.image} /> */}
            <Line />
            <JobName>{item.companyName}</JobName>
            <JobDetail>{item.wantedTitle}</JobDetail>
            <LinkStyle>이동하기></LinkStyle>
          </JobItemContainer>
        ))}
      </Container> 
    </div>
  );
};

export default MyLikeEduList;