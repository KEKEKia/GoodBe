import React from 'react';
import styled from 'styled-components'

const Tab = styled.a`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 45px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin: 0 20px;
    text-decoration: none; /* Remove default underline */

    &:hover,
    &:active {
        color: blue; /* Change text color to blue on hover and active */
        text-decoration: underline; /* Add underline on hover and active */
    }
`

const TabContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
`;

const EduTab = () => {
    return (
        <TabContainer>
            <Tab href="#">기본정보</Tab>
            <Tab href="#">커리큘럼</Tab>
            <Tab href="#">국비교육 후기</Tab>
        </TabContainer>
    );
};

export default EduTab;
