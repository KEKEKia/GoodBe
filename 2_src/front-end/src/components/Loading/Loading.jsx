import React from 'react'
import Pulse from '../../assets/Loading/PulseLoading.svg';
import styled from 'styled-components';

const font1 = styled.span`
    margin = auto;
    fontFamily = 'Istok Web';
    fontSize = 4rem;
    Color = grey;
    flexDirection = column;
    
`


export default function Loading() {
  return (
    <div>
      <h2>잠시만 기다려 주세요.
      <img src ={Pulse} alt="Loading" width = "10%"/>
      </h2>
    </div>
  )
}
