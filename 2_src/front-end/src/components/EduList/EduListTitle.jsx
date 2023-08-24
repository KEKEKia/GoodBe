import React from 'react';

import styled from 'styled-components'


const Container = styled.div`
    margin-top : 170px;
`

const Title = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin: 0;
`
const TitleDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin: 0;

`



const EduListTitle = () => {


    return (
        <Container>
            <Title>교육 과정 추천</Title>
            <TitleDetail>취업을 희망하는 회사나 직무를 입력하면 그에 적합한 교육과정을 추천해드립니다.</TitleDetail>

        </Container>
    );
};

export default EduListTitle;