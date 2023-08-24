import React from 'react'
import styled from 'styled-components';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import { useState } from 'react';

const CustomDiv = styled.div`
  margin-left: 7rem;
`;

const CustomH3 = styled.h3`
  margin-left: 5rem;
  font-size: 20px;
  color: grey;
`;

const CustomH2 = styled.h2`
  font-style: normal;
  margin-left: 5rem;
  font-size: 30px;
  font-weight: bold;
`;

const CustomHr = styled.hr`
  align: right;
  width: 80%;
  color: black;
  margin-left: 5rem;
`;

const CustomBox = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: 35rem;
  background-color: #f1eeeebb;
  padding: 1rem;
`;

const CustomContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 2rem;
  width: 80%;
  height: 20rem;
  background-color: #f1eeeebb;
  border-color: grey;
  // border: 1px solid grey;
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px; /* 테이블 내 글자 크기 조정 */
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 0.5rem;
  text-align: center;
  border-right: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 0.5rem;
  text-align: center;
  position: relative;
  background-color: rgba(200, 200, 200, 0.3);
  border-right: 1px solid #ddd;
  color: #333; /* 테이블 헤더 글씨 색상 변경 */
`;


const ArrowIcon = styled.span`
  margin-left: 0.2rem;
  position: absolute; /* 가상 요소를 부모 요소를 기준으로 배치하기 위해 */
  top: 50%; /* 부모 요소의 중앙에 위치하도록 설정 */
  transform: translateY(-50%); /* 중앙 정렬을 위해 */
`;

const UpArrow = styled(ArrowIcon)` /* 위쪽으로 향하는 정삼각형 스타일 */
  &::before {
    content: '';
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    display: inline-block;
  }
`;

const DownArrow = styled(ArrowIcon)` /* 아래쪽으로 향하는 정삼각형 스타일 */
  &::before {
    content: '';
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
    display: inline-block;
  }
`;

export default function EduRecommendRelatedJob() {

  const [costOrder, setCostOrder] = useState('asc');


  const handleCostSort = () => {
    setCostOrder(costOrder === 'asc' ? 'desc' : 'asc');

    // 비용을 기준으로 데이터를 정렬합니다.
    const sortedData = [...tableData].sort((a, b) => {
      const costA = parseInt(a.totalCost, 10);
      const costB = parseInt(b.totalCost, 10);
      return costOrder === 'asc' ? costA - costB : costB - costA;
    });

    setTableData(sortedData);
  };



  // 가상의 데이터를 생성합니다. 실제로는 백엔드에서 데이터를 받아오게 됩니다.
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: '교육1',
      course: '과정1',
      status: '모집중',
      totalCost: '100만원',
      location: '서울',
      deadline: '2023-08-31',
      start: '2023-09-10',
    },
    {
      id: 2,
      name: '교육2',
      course: '과정2',
      status: '모집중',
      totalCost: '80만원',
      location: '부산',
      deadline: '2023-08-30',
      start: '2023-09-01',
    },
    {
      id: 3,
      name: '교육3',
      course: '과정3',
      status: '마감',
      totalCost: '120만원',
      location: '대전',
      deadline: '2023-08-29',
      start: '2023-08-30',
    },
    // 이하 더미 데이터를 추가해주세요.
  ]);
  

  return (
    <>
      <div>
        <CustomBox>
          <h2 style={{ marginLeft: '7rem', marginTop: '2rem', fontWeight: 'bold' }}>
            🙌Naver I&S 취뽀를 위한 국비교육 추천해드릴게요🙌
          </h2>
          <h3 style={{ marginLeft: '7rem', marginTop: '2rem', fontSize: '15px', color: 'grey' }}>
            GoodBe에서 채용공고와 일치하는 교육과정들을 분석했어요.
          </h3>
          <CustomContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>교육명</TableHeader>
                  <TableHeader>과정</TableHeader>
                  <TableHeader>
                   모집상태 <ArrowIcon>{/* 화살표 아이콘 */}</ArrowIcon>
                  </TableHeader>
                  <TableHeader onClick={handleCostSort}>
                    총 비용
                    {costOrder === 'asc' ? <UpArrow /> : <DownArrow />}   
                  </TableHeader>
                  <TableHeader>
                    수업장소 <ArrowIcon>{/* 화살표 아이콘 */}</ArrowIcon>
                  </TableHeader>
                  <TableHeader>
                      모집마감일   <ArrowIcon>{/* 화살표 아이콘 */}</ArrowIcon>
                  </TableHeader>
                  <TableHeader>
                    개강일 <ArrowIcon>{/* 화살표 아이콘 */}</ArrowIcon>
                  </TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <TableRow key={row.id}> 
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.course}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>{row.totalCost}</TableCell>
                    <TableCell>{row.location}</TableCell>
                    <TableCell>{row.deadline}</TableCell>
                    <TableCell>{row.start}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </CustomContainer>
        </CustomBox>
      </div>
    </>
  );
}