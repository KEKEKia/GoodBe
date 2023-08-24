import React, {useState, useEffect} from 'react';
import BoardList from '../components/BoardMain/BoardList'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Loading from '../components/Loading/Loading';

export default function BoardMain() {

  return (
    <div>
      <Navbar />
      <BoardList/>
      <Footer/>
    </div>
  )
}
