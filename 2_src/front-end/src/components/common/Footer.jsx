
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import styled from 'styled-components'
import { BiBox } from 'react-icons/bi';


const Container = styled.div`
  position: relative;
  transform: translate(0%);
  margin-top : 300px;
  z-index: 0;
`

const BOX = styled.div`
// margin-left : 300px;

`
export default function Footer() {
  return (
    <Container>


    <MDBFooter bgColor='light' className='text-left text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <BOX>

          <MDBCol lg='6' md='12' className='mb-4 mb-md-0' >
            <h5 className='text-uppercase'>주식회사 SSATOPIA</h5>

            <p>서울특별시 강남구 테헤란로 212 17층</p>
            <p>사업자 등록번호 없지롱 방구~ | 직업정보제공사업 없다룽~ | 통신판매업 아직이지룽~</p>
            <p>대표 이성원 이정석 유지나 이승환 이해준 | 개인정보보호책임자 금세현</p>
            <p>대표번호 010-1111-1111 | 교육 등록 문의 010-2222-2222 | 광고제휴</p>
          </MDBCol>

          </BOX>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://SSATOPIA.com/'>
          SSATOPIA.com
        </a>
      </div>
    </MDBFooter>
    </Container>
  );
}