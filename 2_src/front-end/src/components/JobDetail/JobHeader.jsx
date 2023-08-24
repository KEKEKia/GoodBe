import React from 'react';
import styled from 'styled-components';

const CustomDiv = styled.div`
  margin-left: 5rem;
`;

const CustomH3 = styled.h3`
 
  font-size: 20px;
  color: grey;
`;

const CustomH2 = styled.h2`
  font-style: normal;
  
  font-size: 30px;
  font-weight: bold;
`;

const CustomHr = styled.hr`
  align: right;
  width: 80%;
  color: black;
  
`;

export default function JobHeader() {
  return (
    <CustomDiv>
      <div>
        <br />
        <CustomH2>채용공고 {`>`} 대기업</CustomH2>
        <CustomH3>채용공고를 상세하게 확인하고 맞춤 교육과정을 확인하세요</CustomH3>
        <CustomHr />
      </div>
    </CustomDiv>
  );
}
