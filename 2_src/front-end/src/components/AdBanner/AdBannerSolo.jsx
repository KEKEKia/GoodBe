import React from 'react';
import styled from 'styled-components';
import AdBanner from '../../assets/MyEduLike/AdBannerImg.svg';

const Container = styled.div`
    margin : auto
    // margin-bottom: -40px;
    width: 80%;
    height: auto; /* 변경: 픽셀 단위로 지정 */
    display: flex;
    flex-direction: row;
    // border: 1px solid black;
`;

const ImageAdBannerSolo = styled.img`
    margin : auto;
    margin-top : 70px;
    margin-bottom: 70px;
    width: 80%; /* 이미지 요소의 너비를 100%로 설정 */
    height: 100%; /* 이미지 요소의 높이를 100%로 설정 */
`;

export default function AdBannerSolo() {
  return (
    <div>
      <Container>
        <ImageAdBannerSolo src={AdBanner} />
      </Container>
    </div>
  );
}
