import React from 'react';
import styled from 'styled-components';


const Container1 = styled.div`
margin-top : 5%;
    position: absolute;
    width: 85%;
    flex-direction : column;
    /* display : flex; */
    height : 350px;
    margin-left : 8%;
    /* align-items: center; */
    background: #FFFFFF;
    /* border: 1px solid #0c0d0d; */
    padding : auto;
    /* margin:auto; */
    position: relative;
    

`
const h4 = styled.div`
  font-size: 1rem;
`
const Container2 = styled.div`
    width: 95%;
    padding-left : 10px;
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center;
    background: #F7F7F7;
    /* border: 1px solid #0c0d0d; */
    margin: auto;
    border-radius: 10px;
`;


const Container2_1 = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row; 
    background: #F7F7F7;
    /* border: 1px solid #0c0d0d; */
    margin: auto;
    
`;

const Container3 = styled.div`
    width: 30%;
    flex-direction: column;
    display: flex;
    height: 150px;
    background: #FFFFFF;
    border: 1px solid #e6e2e2;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    position: relative; 
`;

const AddButton = styled.button`
    width: 80%;
    padding: 15px 15px;
    background-color: transparent;
    border: 0px;
    font-family: 'Istok Web';
    font-size: 20px;
    font-weight: bold;
    color: #C1BDBD;
    display: flex; 
    align-items: center; 
    justify-content: center; 
    margin: auto; 
    margin-top: auto; 
`;


const LogoImage1 = styled.img`
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
  z-index: 1;
`;
const LogoImage2 = styled.img`
  max-width: 150px;
  height: auto;
  /* display: flex; */
  margin: auto;
  z-index: 2;
  position : absolute;
  margin-top : 100px;
  margin-left: -250px;

`;
const TitleInform = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 47px;
  color: #070707;
  justify-content: space-evenly;
  margin-left: 40px;
  margin-bottom: -10px;
`;
const Title = styled.h3`
  margin-left: 10%;
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 47px;
  color: #070707;
  justify-content: space-evenly;
`;
const Fonts = styled.span`
font-family: 'Istok Web';
  font-style: normal;
  font-size: 15px;
  line-height: 47px;
  font-weight: bold;
  color: #C1BDBD;
  justify-content: space-evenly; 
  position: absolute;
  margin-left : 5px;
`;



export default function EduInterest() {
    return (
      <div>
        <Container1>
          <Title>
            ✈ 로그인 후 관심 교육을 관리하세요
          </Title>
          <br/>
          <Container2>
            <TitleInform>
              관심 있는 교육 리스트
            </TitleInform>
            <Container2_1>
              <Container3>
                <AddButton>+ 관심있는 교육 추가</AddButton>
              </Container3>
              <Container3>
                <AddButton>+ 관심있는 교육 추가</AddButton>
              </Container3>
              <Container3>
                <AddButton>+ 관심있는 교육 추가</AddButton>
              </Container3>
            </Container2_1>
          </Container2>
        </Container1>
        
      </div>
    );
  }