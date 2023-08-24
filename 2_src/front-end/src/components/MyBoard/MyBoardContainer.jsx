
import axios from 'axios';
import styled from 'styled-components';
import { AiOutlineLike, AiOutlineEye } from 'react-icons/ai';
import { BiMessageDots } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';


const API_BASE_URL = 'http://localhost:8080';

const BoardContainer = styled.div`
    border-radius: 10px;
    border: 1px solid #858585;
    background: #FFF;
    margin-left: 380px;
    margin-top: 30px;
    width: 900px;
    margin-bottom: 30px;
    padding-bottom : -20px;

`
const BoardType = styled.p`
    color: #60A0EF;
    font-family: Istok Web;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`
const BoardTitle = styled.p`

    color: #000;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

const EduDate = styled.p`
    color: #7D7D7D;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`


const BoardBox = styled.div`
    padding: 20px;

`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: -50px;

`;
const LikeCount = styled.p`
    padding : 5px;
    color: #757575;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    align-items: center;
    margin-top:20px;
`;

const CommentCount = styled.p`
    padding : 5px;
    color: #757575;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    // margin-left: 5px;
    margin-top:20px;
`;

const ViewCount = styled.div`
    padding : 5px;
    // margin-left: 5px;
    color: #757575;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-top : 5px;
`

const Box = styled.div`
  margin-bottom : 100px;

`

const MyBoardContainer = () => {
    const [boardData, setBoardData] = useState([]); 
    

    useEffect(() => {
      axios
        .get(`${API_BASE_URL}/api/mypage/posts`)
        .then(function (response) {
          console.log(response.data);
          setBoardData(response.data);
        })
        .catch(function (error) {
          console.error('Error fetching data:', error);
        });
    }, []); 
  
    return (
      <Box>
        {boardData.map((item) => (
          <BoardContainer key={item.postId}>
            <BoardBox>
              <BoardType>{item.boardType}</BoardType>
              <BoardTitle>{item.title}</BoardTitle>
              <EduDate>{item.createDate}</EduDate>
              <IconContainer>
                <AiOutlineLike size={26} />
                <LikeCount>{item.likes}개</LikeCount>
                <BiMessageDots size={26} style={{ marginTop: '5px' }} />
                <CommentCount>{item.comments}개</CommentCount>
                <AiOutlineEye size={26} style={{ marginTop: '5px' }}/>
                <ViewCount>{item.hits}개</ViewCount>
              </IconContainer>
            </BoardBox>
          </BoardContainer>
        ))}
      </Box>
    );
};

export default MyBoardContainer;