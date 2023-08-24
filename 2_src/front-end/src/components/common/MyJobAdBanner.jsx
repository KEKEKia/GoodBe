import React from 'react';
import styled from 'styled-components'
import JobAdBanner from '../../assets/MyJobLike/JobAdBanner.svg';

const ImgStyle = styled.img`
    margin-left : 350px;
    width: 700px;
    height: 200px;


`
const MyJobAdBanner = () => {
    return (

        <div>
            <ImgStyle 
              src={JobAdBanner}
              alt='JobAdBanner'
            />
        </div>
    );
};

export default MyJobAdBanner;