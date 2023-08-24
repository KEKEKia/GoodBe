import React from 'react';
import styled from 'styled-components'
import MyBoard from '../../assets/MyBoard/MyBoard.svg';

const MyBoardHeader = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top : 30px;
    
`
const MyBoardDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`
const MyBoardImg = styled.img`
    width: 400px;
    height: 200px;
    flex-shrink: 0;
    margin-left: 300px;
`
const GoodBeBoardContainer = styled.div`
    align-items: center;
    margin-left: 300px;
    margin-top: -170px;
    padding: 20px;
`;

const GoodBeBoard = styled.p`
    color: #000;
    font-family: Istok Web;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-left: 350px;
`
const GoodBeBoardDetail = styled.p`
    color: #6A6A6A;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin-left: 350px;
`
const MyLikeEduHeader = () => {
    return (
        <div>

            <MyBoardHeader>내가 쓴 글</MyBoardHeader>
            <MyBoardDetail>게시판에 작성한 글을 확인하고 관리할 수 있습니다. </MyBoardDetail>
            <MyBoardImg src={MyBoard}/>
            <GoodBeBoardContainer>
                <GoodBeBoard>GoodBe에서 내가 쓴 글</GoodBeBoard>
                <GoodBeBoardDetail>내가 작성한 글들을 한눈에 확인하는 페이지입니다.
                원하는 글에 클릭하면 <br></br>작성게시판으로 곧바로 넘어갑니다.</GoodBeBoardDetail>
            </GoodBeBoardContainer>
        </div>
    );
};

export default MyLikeEduHeader;