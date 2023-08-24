import {React, useState, useEffect} from 'react';
import styled from 'styled-components';
import myconsulting from '../../assets/MyConsulting/myconsulting.svg'
import axios from 'axios';

const API_BASE_URL = 'https://i9a801.p.ssafy.io/';

const AllButton = styled.button`
    width: 50px;
    height: 41px;
    flex-shrink: 0;
    color: #60A0EF;
    font-family: Istok Web;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    border-radius: 10px;
    background: #E7F4FD;
    font-size: 15px;
    margin-left: 410px;
    margin-top: 100px;
    margin-right: 10px;
    border :#E7F4FD;
`

const DateButton = styled.button`
    width: 110px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #E8E8E8;
    color: #818181;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    border : #E8E8E8;
`
const EduTite = styled.p`
    color: #000;
    font-family: Istok Web;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;

`
const EduInstitution = styled.p`
    color: #7D7D7D;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;

`

const LinkStyle = styled.a`
    color: #60A0EF;
    text-align: right;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top: 10px;
    margin-right: 10px;
    cursor: pointer;
    text-decoration: none;

`

const ConsultImg = styled.img`
    width: 170px;
    height: 100px;
    flex-shrink: 0;
    margin-top: 50px;

    
`
const ConsultItemContainer = styled.div`
    display: flex;
    border-radius: 10px;
    border: 1px solid #858585;
    background: #FFF;
    width: 800px;
    margin-left: 350px;
    margin-top: 30px;
    height: 200px;
    margin-bottom : 50px;
    

`
const EduDetailsContainer = styled.div`
    flex: 1; 
    display: flex;
    align-items: left;
    flex-direction: column;
    margin-left : 40px;
`;

const EduDate = styled.p`
    color: #2400FF;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left : 15px;
    margin-top: 5px;
`

const DateBox = styled.div`
    width: 480px;
    height: 35px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #E7F4FD;
    
`
const ReservaionButton = styled.a`
    width: 132px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #E7F4FD99;
    border: #E7F4FD99;
    color: #4B93C5;
    display: flex; /* Flex 컨테이너로 설정 */
    align-items: center; /* 수직 가운데 정렬 */
    justify-content: center; /* 수평 가운데 정렬 */
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    text-transform: capitalize;
    margin-left : auto;
    margin-right : 30px;
    margin-top :-125px;
    line-height: normal;
    text-decoration: none;
`;

const Container = styled.div`
    margin-bottom : 100px;
    margin-left : 60px;
`
const dummyData = [
    {
      id: 1,
      title: '자바/스프링 개발자 양성과정',
      subTitle: '이젠아카데미컴퓨터학원',
      reserveTime: '2023-07-26 15:30',
    },
]
const MyConsultingReservation = () => {
    // const [myconsulting, setmyconsulting] = useState([]); 
    

    // useEffect(() => {
    //   axios
    //     .get(`${API_BASE_URL}/api/mypage/consulting`)
    //     .then(function (response) {
    //       console.log(response.data);
    //       setmyconsulting(response.data);
    //     })
    //     .catch(function (error) {
    //       console.error('Error fetching data:', error);
    //     });
    // }, []); 
   
    return (
        <div>
            <AllButton>전체</AllButton>
            <DateButton>예약일 빠른순</DateButton>
            <Container>

            {dummyData.map((item) => (
                <ConsultItemContainer key={item.id}>
                    {/* <ConsultImg src={item.image} /> */}
                    <EduDetailsContainer>
                        <LinkStyle>교육과정 상세 확인하기 > </LinkStyle>
                        <EduTite>{item.title}</EduTite>
                        <EduInstitution>{item.subTitle}</EduInstitution>
                    <DateBox>
                        <EduDate>예약시간 {item.reserveTime} &nbsp; &nbsp;  방번호  {item.id}</EduDate>
                        
                    </DateBox>
                           
<<<<<<< HEAD
                        <ReservaionButton href='https://goodbeconsult.du.r.appspot.com/'>입장하기</ReservaionButton>
=======
                        <ReservaionButton href='https://goodbeconsult.du.r.appspot.com'>입장하기</ReservaionButton>
>>>>>>> master
                        
                    </EduDetailsContainer>
                </ConsultItemContainer>
            ))}
            </Container>
     

        </div>
    );
};

export default MyConsultingReservation;