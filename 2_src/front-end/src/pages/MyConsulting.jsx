import React from 'react'
import SideBar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import MyEduConsultingHeader from '../components/MyConsulting/MyEduConsultingHeader';
import MyConsultingReservation from '../components/MyConsulting/MyConsultingReservation';


export default function MyConsulting() {
  return (
    <div>
        <SideBar/>
        <Navbar/>
        <MyEduConsultingHeader/>
        <MyConsultingReservation/>
        <Footer/>

    </div>
  )
}
