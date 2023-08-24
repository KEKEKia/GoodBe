import React from 'react'
import SideBar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MyLikeEduList from '../components/MyEduLike/MyLikeEduList';
import MyLikeEduHeader from '../components/MyEduLike/MyLikeEduHeader';


export default function MyEduLike() {
  return (
    <div>
       <SideBar/>
        <Navbar/>
        <MyLikeEduHeader/>
        <MyLikeEduList/>
        <Footer/>

    </div>
  )
}
