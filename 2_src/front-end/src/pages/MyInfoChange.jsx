import React from 'react'
import SideBar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MyPageInformationHeader from '../components/MyInfoChange/MyPageInformationHeader';
import UserInfo from '../components/MyInfoChange/UserInfo';
import MyPageChangeButton from '../components/MyInfoChange/MyPageChangeButton';


export default function MyInfoChange() {
  return (
    <div>
        <SideBar/>
        <Navbar/>
        <MyPageInformationHeader/>
        <Footer/>

    </div>
  )
}
