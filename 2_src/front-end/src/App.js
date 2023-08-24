
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import EduDetail from './pages/EduDetail';
import Main from './pages/Main';
import MyBoard from './pages/MyBoard';
import BoardEdit from './pages/BoardEdit';
import BoardMain from './pages/BoardMain';
import BoardWrite from './pages/BoardWrite';
import  CamChat   from './pages/CamChat';
import   CamChatReview from './pages/CamChatReview';
import  Chatroom   from './pages/Chatroom';
import   Curriculumn  from './pages/Curriculumn';
import   EduList  from './pages/EduList';
import  EduReview   from './pages/EduReview';
// import   EmailFind  from './pages/EmailFind';
import  InstitutionSignUp   from './pages/InstitutionSignUp';
import   JobAnalyze  from './pages/JobAnalyze';
import  JobDetail   from './pages/JobDetail';
import  JobMain   from './pages/JobMain';
import  Login   from './pages/Login';
import  MyConsulting   from './pages/MyConsulting';
import  MyEduLike   from './pages/MyEduLike';
import   MyInfoChange  from './pages/MyInfoChange';
import MyJobLike    from './pages/MyJobLike';
import  MyPageHome   from './pages/MyPageHome';
import  PasswordFind   from './pages/PasswordFind';
import  PasswordResult   from './pages/PasswordResult';
import  PasswordSearch   from './pages/PasswordSearch';
import  Reservation   from './pages/Reservation';
import  SignUp   from './pages/SignUp';
import  TeamInfo   from './pages/TeamInfo';
import  UserWithdraw   from './pages/UserWithdraw';
import  BoardDetail   from './pages/BoardDetail';
import Loading from './components/Loading/Loading';
import RecommendEdu from './components/Recommend/RecommendEdu';

export default function App() {
  return (
    
    <Routes>
      <Route path = "/" element={<Main/>} />
      <Route path = "/MyBoard" element={<MyBoard/>} />
      <Route path = "/BoardDetail" element={<BoardDetail/>} />
      <Route path = "/BoardEdit" element={<BoardEdit/>} />
      <Route path = "/BoardMain" element={<BoardMain/>} />
      <Route path = "/BoardWrite" element={<BoardWrite/>} />
      <Route path = "/CamChat" element={<CamChat/>} />
      <Route path = "/CamChatReview" element={<CamChatReview/>} />
      <Route path = "/Chatroom" element={<Chatroom/>} />
      <Route path = "/Curriculumn" element={<Curriculumn/>} />
      <Route path = "/EduList" element={<EduList/>} />
      <Route path = "/EduReview" element={<EduReview/>} />
      <Route path = "/EduDetail" element={<EduDetail/>} />
      {/* <Route path = "/EmailFind" element={<EmailFind/>} /> */}
      <Route path = "/InstitutionSignUp" element={<InstitutionSignUp/>} />
      <Route path = "/JobAnalyze" element={<JobAnalyze/>} />
      <Route path = "/JobDetail" element={<JobDetail/>} />
      <Route path = "/JobMain" element={<JobMain/>} />
      <Route path = "/Login" element={<Login/>} />
      <Route path = "/MyBoard" element={<MyBoard/>} />
      <Route path = "/MyConsulting" element={<MyConsulting/>} />
      <Route path = "/MyEduLike" element={<MyEduLike/>} />
      <Route path = "/MyInfoChange" element={<MyInfoChange/>} />
      <Route path = "/MyJobLike" element={<MyJobLike/>} />
      <Route path = "/MyEduLike" element={<MyEduLike/>} />


      <Route path="/MyPageHome" element={<MyPageHome/>} />
      <Route path="/PasswordFind" element={<PasswordFind/>} />
      <Route path="/PasswordResult" element={<PasswordResult/>} />
      <Route path="/PasswordSearch" element={<PasswordSearch/>} />
      <Route path="/Reservation" element={<Reservation/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/TeamInfo" element={<TeamInfo/>} />
      <Route path="/UserWithdraw" element={<UserWithdraw/>} />
      <Route path="/BoardDetail" element={<BoardDetail/>} />
      <Route path="/RecommendEdu" element={<RecommendEdu/>} />
    </Routes>
  );
};

 
  
