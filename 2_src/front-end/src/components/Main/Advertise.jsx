import React from 'react';
import styled from 'styled-components';
import AdBanner from '../../assets/main/AdBanner.svg';

const Adimg = styled.img`
    width: 72%;
    max-width: 100%; 
    height: auto;
    border-radius: 20px;
    object-fit: contain;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

const Advertise = () => {
    return (
        <Container>
            <Adimg src={AdBanner} alt="AdBanner" />
        </Container>
    );
};

export default Advertise;