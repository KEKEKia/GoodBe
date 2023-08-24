import React, { useState } from 'react'
import Advertise from '../components/Main/Advertise';
import ChatListSample from '../components/Main/ChatListSample';
import EduExampleRecommend from '../components/Main/EduExampleRecommend';
import Navbar from '../components/common/Navbar';
import SearchMain from '../components/Main/SearchMain';
import EduTop6 from '../components/Main/EduTop6';
import EduNear from '../components/Main/EduNear';
import EnterpriseIntroduction from '../components/Main/EnterpriseIntroduction';
import EduInterest from '../components/Main/EduInterset';
import VideoRecommend from '../components/Main/VideoRecommend';
import LargeLink from '../components/Main/LargeLink';
import Footer from '../components/common/Footer';
import AdBannerSolo from '../components/AdBanner/AdBannerSolo';

export default function Main() {
  const [searchKeyword, setSearchKeyword]=useState('');
  return (
    
    <div>
        <Navbar/>
        <Advertise/>
        <SearchMain setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword}/>
        <EduExampleRecommend/>
        {/* <EduTop6/>
        <EduNear/> */}

        
        <EnterpriseIntroduction/>
        <EduInterest/>
      
        <VideoRecommend/>
        <AdBannerSolo/>
        {/* <ChatListSample/> */}
       
        <Footer/>
    </div>
  )
}
