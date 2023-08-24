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
    
`

const EduHeader = () => {
    const linkStyle = {
        display: 'inline-block',
        marginRight: '50px', 
        textDecoration: 'none', 
        color: 'black', 
    };
    return (
        
        <div>
            <Tab href="#" style={linkStyle}>기본정보</Tab>
            <Tab href="#" style={linkStyle}>커리큘럼</Tab>
            <Tab href="#" style={{color: 'black', textDecoration: 'none'}}>국비교육 후기</Tab>
        </div>
    );
};

export default EduHeader;