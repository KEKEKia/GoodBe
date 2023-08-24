import React from 'react';
import myprofile from '../../assets/MyPageHome/myprofile.svg';
import styled from 'styled-components'

const Title = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`;
const TitleDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`
const MyPageHomeHeader = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '90vh',
        marginTop: '30px'
    };
    const imgStyle = {
        width: '100px',
        marginBottom: '10px' // 여기에 원하는 마진값을 줄여줍니다.
    };

    return (
        <div style={containerStyle}>
            <img src={myprofile} alt="myprofile" style={imgStyle} />
            <Title>지나님, 환영합니다</Title>
            <TitleDetail>내 정보 확인 및 개인 정보 수정을 통해 나에게 필요한 방식으로 굿비를 사용할 수 있습니다.</TitleDetail>
        </div>
    );
};

export default MyPageHomeHeader;