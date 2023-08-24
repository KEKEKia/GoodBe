import React from 'react'
import MyPageTeamHeader from '../components/TeamInfo/MyPageTeamHeader'
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import Footer from '../components/common/Footer';



export default function TeamInfo() {
  return (
    <div>
        <Sidebar/>
        <Navbar/>
        <MyPageTeamHeader/>
        <br/>
        <br/>
        
        <Footer/>
    </div>
  )
}
