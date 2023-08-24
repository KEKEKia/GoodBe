import React from 'react'
import SideBar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

import MyBoardContainer from '../components/MyBoard/MyBoardContainer';
import MyBoardHeader from '../components/MyBoard/MyBoardHeader';
export default function MyBoard() {
  return (
    <div>
        <SideBar/>
        <Navbar/>
        <MyBoardHeader/>
        <MyBoardContainer/>
        <Footer/>

    </div>
  )
}
