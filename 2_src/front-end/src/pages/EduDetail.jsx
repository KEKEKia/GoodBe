import React from 'react'
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import EduDetailContent from '../components/EduDetail/EduDetailContent';
import EduHead from '../components/EduDetail/EduHead';
import EduTab from '../components/EduDetail/EduTab';

export default function EduDetail() {
  return (
    <div>
        <Navbar/>
        <EduHead/>
        <EduTab/>
        <EduDetailContent/>
        <Footer/>
    </div>
  )
}
