import {React, useState, useEffect} from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import goodbelogo from '../../assets/navbar/goodbelogo.svg';
import styled from 'styled-components';
import GoLogin from '../Login/GoLogin';
import { CgProfile } from "react-icons/cg";
import { BiBorderRadius, BiMessageDetail } from "react-icons/bi";

const Navbbar=styled.div`
  width: 100%;
`

const NavbarLink = styled(Nav.Link)`
  font-size: 17px;
  color: #919191;

  &:hover {
    color: #1B73E8;
  }
`;


const ProfileIcon = styled(CgProfile)`
  color: #c0c0c0;
  width: 40px;
  height: 40px;
  margin: 5px;

  &:hover {
    color: #00a2e8;
  }
`;
const MessageIcon = styled(BiMessageDetail)`
  color: #c0c0c0;
  width: 40px;
  height: 40px;
  margin: 5px;

  &:hover {
    color: #00a2e8;
  }
`;

export default function CustomNavbar() {
  
  const navbarIconStyle = {
    marginRight: '6px', 
  
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 토큰 존재 여부에 따라 로그인 상태 업데이트
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
    setIsLoggedIn(!!(accessToken && refreshToken));
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLogout = () => {
    // 로컬 스토리지의 토큰 삭제
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // 로그인 상태 업데이트
    setIsLoggedIn(false);
  };

  return (
    <Navbbar className="App">
      <Navbar bg="white" variant="light">
        <Navbar.Brand href="/">
          <img
            src={goodbelogo}
            alt="Logo"
            height="45"
            width="135"
            style={{ marginLeft: '10px' }}
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavbarLink href="/JobMain">채용공고</NavbarLink>
          <NavbarLink href="/EduList">국비교육</NavbarLink>
          <NavbarLink href="/BoardMain">게시판</NavbarLink>
          <NavbarLink href="/RecommendEdu">국비 추천</NavbarLink>
        </Nav>

        <div style={navbarIconStyle}>
          {isLoggedIn ? (
            <button onClick={handleLogout} style={{ border: 'none', borderRadius: '10px' }}>
              로그아웃
            </button>
          ) : (
            <button onClick={openModal} style={{ border: 'none', borderRadius: '10px' }}>
              로그인
            </button>
          )}
        </div>

        <NavbarLink href="/MyPageHome">
          <ProfileIcon />
        </NavbarLink>

        <div style={navbarIconStyle}>
          <NavbarLink href="http://localhost:8092">  {/* 채팅으로 이동 */}
          
            <MessageIcon />
          </NavbarLink>
        </div>
      </Navbar>
      {modalOpen && (
          <GoLogin closeModal={closeModal} />

      )}
    </Navbbar>
  );
}
