import React from 'react';
import styled from 'styled-components';
import Building from '../../assets/main/Building.svg';
import SamsungLogo from '../../assets/main/SamsungLogo.svg';

const Container1 = styled.div`
margin-top: 5%;
    width: 90%;
    flex-direction : column;
    display : flex;
    height : 350px;
    /* align-items: center; */
    left: 50%;
    top: 50%;
    margin-left : 8%;
    background: #FFFFFF;
    /* border: 1px solid #0c0d0d; */
    padding : 5px;
`

const Container2 = styled.div`

    width: 95%;
    flex-direction : row;
    align-items: center;
    display : flex;
    height : auto;
    align-items: center;
    left: 50%;
    border-radius: 10px;
    top: 50%;
    /* background: #e2e2e2de; */
    
    margin-top : 0;
`

const Container3 = styled.div`

    width: 30%;
    flex-direction : column;
    display : flex;
    height : auto;
    align-items: center;            
    left: 50%;
    top: 50%;
    /* border-radius: 10px; */
    background: #ffffffde;
    /* padding : 10px; */
    align-items: center;
    align-content: center;
    margin: auto;
    margin-top: 0;
    border: 1px solid #d0ccccb4;
    border-bottom-color : white;
    border-top-color: white;
`

const Container4 = styled.div`
    width: 75%;
    flex-direction : row;
    justify-content: center; 
    border-radius: 10px;
    display : flex;
    left: 50%;
    top: 50%;
    background: #FFFDD9;
    /* border: 1px solid #0c0d0d; */

    
`
const LogoImage1 = styled.img`
  max-width: 300px;
  height: auto;
  display: block;
  margin: 0 auto;
  z-index: 1;
`;
const LogoImage2 = styled.img`
  max-width: 100px;
  height: auto;
  /* display: flex; */
  margin: auto;
  z-index: 2;
  position : absolute;
  margin-top : 110px;
  margin-left: -250px;

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

const RedSmallText = styled.span`
  font-size: 1rem;
  color: #B26000;
  font-weight: bold;
  font-family: 'Istok Web';
  align-items: center;
`;


export default function EnterpriseIntroduction() {
  return (
    <div>


    <Container1>
        <Title>
        ✈ 기업을 소개합니다
        </Title>
        <br/>
        <Container2>

        <Container3>
            <LogoImage1 alt="Building"src={Building}/>
            <LogoImage2 alt ="SamsungLogo" src={SamsungLogo}/>
        </Container3>
        <Container3>
        <LogoImage1 alt="Building"src={Building}/>
            <LogoImage2 alt ="SamsungLogo" src={SamsungLogo}/>
        </Container3>
        <Container3>
        <LogoImage1 alt="Building"src={Building}/>
            <LogoImage2 alt ="SamsungLogo" src={SamsungLogo}/>
        </Container3>
        
    </Container2>
    <Container2>
    <Container3>
        <h6 style={{
            fontWeight : 'bold',
        }}>삼성전자</h6>
        
        <h6>
            대기업
            </h6>
        <Container4>
            <RedSmallText>
            FICS 반도체 및 관련장비
            </RedSmallText>
        </Container4>
    </Container3>
    <Container3>
    <h6 style={{
            fontWeight : 'bold',
        }}>삼성전자</h6>
        
        <h6>
            대기업
            </h6>
        <Container4>
            
            <RedSmallText>
            FICS 반도체 및 관련장비
            </RedSmallText>
        </Container4>
    </Container3>
    <Container3>
    <h6 style={{
            fontWeight : 'bold',
        }}>삼성전자</h6>
        
        <h6>
            대기업
            </h6>
        <Container4>
            <RedSmallText>
            FICS 반도체 및 관련장비
            </RedSmallText>
        </Container4>
    </Container3>
    </Container2>
    </Container1>

    </div>
    

  )
}
