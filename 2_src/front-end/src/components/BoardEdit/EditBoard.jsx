import React from 'react';
import styled from 'styled-components'

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
  color: #FDFDFD;
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

const EditBoard = () => {
    return (

    <Container>
      <Header>GoodBe 글 쓰기</Header>
      <BlueLine />

      <Select className="selectform form-select form-select-lg mb-3 select">
        <option selected>게시판을 선택해주세요.</option>
        <option value="1">취업 준비</option>
        <option value="2">국비 교육</option>
        <option value="3">학습 공유</option>
        <option value="3">취뽀 후기</option>
      </Select>

      <Input
        type="text"
        className="titleform form-control"
        placeholder="제목을 입력해주세요"
      />

      <form action="insertStudentInfoForm" method="post">
        <div id="smarteditor">
          <TextArea
            name="editorTxt"
            id="editorTxt"
            rows="20"
            placeholder="내용을 입력해주세요"
            className="writeform"
          ></TextArea>
        </div>

        <div className="buttons mt-3">
          <Box className="hidden-btn">
          {/* 글 수정 버튼 */}
          <RegistButton
            type="button"
            className="regist-btn"
            value="수정 완료"
          />

          {/* 수정 취소 버튼 */}
          <CancelLink href="#" className="cancel-btn">
            수정 취소
          </CancelLink>
        </Box>
        </div>
      </form>
    </Container>

    );
};

export default EditBoard;