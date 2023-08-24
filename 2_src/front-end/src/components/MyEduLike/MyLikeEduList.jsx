import { React, useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ssafy from '../../assets/MyEduLike/ssafy.svg';
import groom from '../../assets/MyEduLike/groom.svg';
import boostcamp from '../../assets/MyEduLike/boostcamp.svg';

const API_BASE_URL = 'http://localhost:8080';

const EduButton = styled.button`
  border-radius: 10px;
  border: 1px solid #c0d9ff;
  background: #c0d9ff;
  color: #4a2dff;
  font-family: Istok Web;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 100px;
  padding: 5px;
`;

const EduName = styled.p`
  font-family: Istok Web;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  text-align: center;

`;

const EduDetail = styled.p`
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
  margin-bottom: 100px;
`;

const EduItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #A7A7A7;
  background: rgba(255, 255, 255, 0.45);
  text-align: left;
  padding: 10px;
`;

const EduImage = styled.img`
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
  const [myEduLike, setmyEduLike] = useState([]); 
    

    useEffect(() => {
      axios
        .get(`${API_BASE_URL}/api/mypage/edu`)
        .then(function (response) {
          console.log(response.data);
          setmyEduLike(response.data);
        })
        .catch(function (error) {
          console.error('Error fetching data:', error);
        });
    }, []); 

  return (
    <div>
      <EduButton>교육과정 둘러보기</EduButton>
      <Container>
        {myEduLike.map((item) => (
          <EduItemContainer key={item.id}>
            {/* <EduImage src={item.image} /> */}
            <Line />
            <EduName>{item.title}</EduName>
            <EduDetail>{item.company}</EduDetail>
            <LinkStyle>이동하기></LinkStyle>
          </EduItemContainer>
        ))}
      </Container>
    </div>
  );
};

export default MyLikeEduList;
