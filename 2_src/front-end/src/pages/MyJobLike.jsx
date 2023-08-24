import React from 'react'
import SideBar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MyJobListHeader from '../components/MyJobLike/MyJobListHeader';
import MyJobList from '../components/MyJobLike/MyJobList';


export default function MyJobLike() {
  return (
    <div>
        <SideBar/>
        <Navbar/>
        <MyJobListHeader/>
        <MyJobList/>
        <Footer/>
    </div>
  )
}
