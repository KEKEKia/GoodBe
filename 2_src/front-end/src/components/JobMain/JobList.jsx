import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 스타일드 컴포넌트로 스타일링된 링크 컴포넌트 정의
const StyledButton = styled(Link)`
  background-color: #a4c3ff;
  color: #000000;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
  margin-bottom: 5px;
  width: 100%;
  text-decoration: none; /* Add this line to make it look like a link */
`;



const API_BASE_URL = 'https://i9a801.p.ssafy.io';


// 페이지네이션 버튼 생성을 위한 함수
const generatePageNumbers = (currentPage, totalPages, displayRange = 5) => {
  const pageNumbers = [];
  // 현재 페이지를 중심으로 양쪽으로 일정 범위 내의 페이지 숫자를 생성
  const startPage = Math.max(1, currentPage - Math.floor(displayRange / 2));
  const endPage = Math.min(totalPages, startPage + displayRange - 1);
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return pageNumbers;
};



// 페이지네이션 버튼 렌더링 함수
const renderPageNumbers = (currentPage, totalPages, setCurrentPage) => {


  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 3 && pageNumber <= totalPages - 2) {
      setCurrentPage(pageNumber);
    } else if (pageNumber < 3) {
      setCurrentPage(3);
    } else if (pageNumber > totalPages - 2) {
      setCurrentPage(totalPages - 2);
    }
  };

  const pageNumbers = generatePageNumbers(currentPage, totalPages);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      {currentPage > 1 && (
        <button
          style={{
            padding: '5px 10px',
            margin: '0 5px',
            backgroundColor: '#EBEBEB',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          &lt;
        </button>
      )}
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          style={{
            padding: '5px 10px',
            margin: '0 5px',
            backgroundColor: currentPage === pageNumber ? '#60A0EF' : '#EBEBEB',
            color: currentPage === pageNumber ? 'white' : 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          style={{
            padding: '5px 10px',
            margin: '0 5px',
            backgroundColor: '#EBEBEB',
            color: 'black',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};








const JobList = ({ searchKeyword }) => {

  const [inputPage, setInputPage] = useState([]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputPage(e.target.value);
  };

  const [activeTab, setActiveTab] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);

  // JobList 컴포넌트 정의
  const [JobList, setJobList] = useState([]);
  const itemsPerPage = 20;

 
 
  useEffect(() => {
    if (searchKeyword) {
      axios
        .get(`${API_BASE_URL}/search/jobpost/${searchKeyword}`)
        .then(function (response) {
          console.log(response.data);
          setJobList(response.data);
          console.log(JobList);
        })
        .catch(function (error) {
          console.error('데이터 불러오기 오류:', error);
        });

    } else {
      axios
        .get(`${API_BASE_URL}/search/jobpost/all`)
        .then(function (response) {
          console.log(response.data);
          setJobList(response.data);
          console.log(JobList);
        })
        .catch(function (error) {
          console.error('Error fetching data:', error);
        });
      }
    }, [searchKeyword]); 

  // 현재 페이지에 해당하는 데이터 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = JobList
    .filter((job) => activeTab === '전체' || job.category === activeTab)
    .slice(indexOfFirstItem, indexOfLastItem);

  // 페이지 번호를 클릭했을 때 페이지 변경
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(
    JobList.filter((job) => activeTab === '전체' || job.category === activeTab).length / itemsPerPage
  );

  const [favoriteJobs, setFavoriteJobs] = useState([]);

  const handleFavoriteClick = (jobId) => {
    const job = JobList.find((job) => job.id === jobId);
    if (favoriteJobs.some((favJob) => favJob.id === job.id)) {
      setFavoriteJobs(favoriteJobs.filter((favJob) => favJob.id !== job.id));
      alert('찜이 취소되었습니다');
    } else {
      setFavoriteJobs([...favoriteJobs, job]);
      alert('찜 했습니다');
    }
  };

return (
  
  <div
    style={{
      paddingBottom : '30px',
          paddingTop : '30px',
      fontFamily: 'Istok Web, sans-serif',
      width: '75%',
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: 'white',
      margin: '0 auto',
      marginTop: '50px',
    }}
  >

      {/* 아티클 리스트 렌더링 */}
      <div style={{ padding: '10px', marginBottom: '10px' }}>
    {currentItems.map((job, index) => (
      <div
        key={job.id}
        style={{
          paddingBottom : '30px',
          paddingTop : '30px',
          borderBottom: '1px solid #ccc',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ paddingBottom : '50px',
          paddingTop : '50px',marginRight: '10px', fontWeight: 'bold', fontSize: '17px' }}>{job.companyName}</p>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h5 style={{ marginBottom: '5px' }}>{job.wantedTitle}</h5>
          <p style={{ marginBottom: '5px' }}>위치: {job.address}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <StyledButton to={`/JobDetail?id=${job.jobId}`}>상세보기</StyledButton>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {favoriteJobs.some((favJob) => favJob.id === job.id) ? (
               <div
               onClick={() => handleFavoriteClick(job.id)}
               style={{ cursor: 'pointer', color: 'red', marginTop: '5px' }}
             >
               <AiFillHeart style={{ fontSize: '27px' }} />
             </div>
           ) : (
             <div
               onClick={() => handleFavoriteClick(job.id)}
               style={{ cursor: 'pointer', marginTop: '5px' }}
             >
               <AiOutlineHeart style={{ fontSize: '27px' }} />
             </div>
          )}
        </div>
        </div>
      </div>
    ))}
  </div>

      {/* 페이지네이션 버튼 */}
      {renderPageNumbers(currentPage, totalPages, setCurrentPage)}
    </div>

  );
}


export default JobList; 