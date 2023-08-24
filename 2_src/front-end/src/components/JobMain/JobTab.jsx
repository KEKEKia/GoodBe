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
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin: 0;

`



const JobTab = () => {


    return (
        <Container>
            <Title>채용공고</Title>
            <TitleDetail>관심있는 기업과 직무를 골라보세요</TitleDetail>

        </Container>
    );
};

export default JobTab;