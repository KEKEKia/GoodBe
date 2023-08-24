import React from 'react';
import AdBannerImg from '../../assets/MyEduLike/AdBannerImg.svg';
import styled from 'styled-components'

const ImgStyle = styled.img`
    margin-left : 350px;
    width: 700px;
    height: 200px;


`
const MyEduAdBanner = () => {
    return (

        <div>
            <ImgStyle 
              src={AdBannerImg}
              alt='AdBannerImg'
            />
        </div>
    );
};

export default MyEduAdBanner;