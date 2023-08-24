import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


const  API_BASE_URL = 'https://i9a801.p.ssafy.io';
const Container = styled.div`
  margin: auto;
  padding: 20px;
  width: 1200px;    
`;

const Header = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #000;
font-family: Istok Web;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
`;

const BlueLine = styled.div`
  height: 2px;
  background-color: #2000E7F5;
//   margin-top : -10px;
  margin: 10px 0;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;

`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  color: #6B6B6B;
    font-family: Istok Web;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  height: 250px;
`;

const RegistButton = styled.input`
  background-color: #425CE7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const CancelLink = styled.a`
    fill: #FFF;
    background-color: #919191;
    border-radius: 5px;
    padding: 9px 10px;
    stroke-width: 1px;
    stroke: #676767;
    margin-left: 10px;
    color: #FDFDFD;
    text-align: center;
    font-family: Istok Web;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    text-decoration : none;
`;

const Box = styled.div`
    display: flex;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; 
`

const WrtieBoard = () => {

  const [boardWrite, setBoardWrite] = useState(null);

  const [selectedBoard, setSelectedBoard] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [shouldNavigate, setShouldNavigate] = useState(false); // Add this state

  const handleSelectChange = (event) => {
    
    setSelectedBoard(event.target.value);
  };

  const handleRegistClick = async () =>  {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb29nbGVfMTA4MDA1NDgyOTExODE3NzI4MDA1IiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2OTIzNDQwNDV9.zAosniWvVjPawZCaeAr7f3M7TTkaorArIHAdvmBQ4ik';
    try {
      const boardPost = {
        boardType: selectedBoard,
        title: title,
        content: content,
      };

        const formData = new FormData();
        formData.append('postWriteRequest', new Blob([JSON.stringify(boardPost)], {
            type: "application/json"
        }));

        try {
            const response = await axios.post(
              `https://i9a801.p.ssafy.io/api/board/write`,
                formData,
                {   
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `${accessToken}`
                    }
                }
            );

            // console.log('User information updated:', response.data);
            console.log(accessToken)
            alert('정상적으로 수정되었습니다!')
            setBoardWrite(response.data);
            setShouldNavigate(true); // Set the state to trigger navigation
        } catch (error) {
            console.error("수정 실패:", error);
            alert("수정 실패");
        }
    } catch (error) {
        console.error("오류:", error);
    }
};
    return (

    <Container>
      <Header>GoodBe 글 쓰기</Header>
      <BlueLine />

      <Select className='tmp' onChange={handleSelectChange} value={selectedBoard}>
  <option value="">게시판을 선택해주세요.</option>
  <option value="취업준비">취업 준비</option>
  <option value="국비교육">국비 교육</option>
  <option value="학습공유">학습 공유</option>
  <option value="취뽀후기">취뽀 후기</option>
</Select>

      <Input
        type="text"
        className="titleform form-control"
        placeholder="제목을 입력해주세요"
        value={title} 
        onChange={(e) => setTitle(e.target.value)}  />

      <form action="insertStudentInfoForm" method="post">
        <div id="smarteditor">
          <TextArea
            name="editorTxt"
            id="editorTxt"
            rows="20"
            placeholder="내용을 입력해주세요"
            className="writeform"
            value={content}  // Bind the textarea value to the content state
            onChange={(e) => setContent(e.target.value)}
          ></TextArea>
        </div>

        <div className="buttons mt-3">
          <Box className="hidden-btn">
          {/* 글 등록 버튼 */}
          <RegistButton
            type="button"
            className="regist-btn"
            value="글 등록"
            onClick={handleRegistClick}
            
          />

          {/* 작성 취소 버튼 */}
          <CancelLink href="/BoardMain" className="cancel-btn">
            작성 취소
          </CancelLink>
        </Box>
        </div>
      </form>
      {shouldNavigate && <Navigate to="/BoardMain" />}
    </Container>

    );
};

export default WrtieBoard;