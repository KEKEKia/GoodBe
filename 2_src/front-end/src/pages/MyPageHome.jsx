import React from 'react'
import SideBar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MyPageHomeHeader from '../components/MyPageHome/MyPageHomeHeader';
import MypageHome from '../components/MyPageHome/MypageHome';

export default function MyPageHome() {
  return (
    <div>
        <SideBar/>
        <Navbar/>
        <MyPageHomeHeader/>
        <MypageHome/>
        <Footer/>


    </div>
  )
}
