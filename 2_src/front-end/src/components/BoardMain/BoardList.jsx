import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';



const API_BASE_URL = 'http://i9a801.p.ssafy.io';

let TabContentTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  display:flex;
  justify-content: center;
  align-items: center;
    width : 100%;
    height: auto;
`

const TabItem = styled.li`
    text-align: left;
    font-family: Istok Web;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    cursor: pointer;

  &.selected {
    background-color: #4AA9FF; /* 선택된 탭의 배경색 */
    color: #fff; /* 선택된 탭의 텍스트 색상 */
  }

  &.not-selected {
    color: #919191;

  }
`;


const ArticleList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // Two columns per row
  gap: 20px; // Gap between articles
  margin: auto;
  width : 80%;
`;

const Article = styled.div`
  width: 100%;
  padding: 20px;
  border-top: 1px solid #919191;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
`;


const Title = styled.h2`
height: 20%;
color: #000;
font-family: Istok Web;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-transform: capitalize;
`

const Content = styled.div`
color: #696868;
height: 50%;
font-family: Istok Web;
font-size: 13px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
`

const AboutArticle = styled.div`
color: #696868;
height: 10%;
font-family: Istok Web;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
margin-top: 20px;
`

const Img = styled.img`
  width: 25%;
  border-radius: 5px;
`
const Left = styled.div`
  width:75%;
`

const Nav=styled.div`
  width: 47%;
  justify-content: space-between;
  display: flex;
  margin-left : 180px;
  margin-top: 30px;
//   margin: 0 auto; 
`

const Tab = styled.a`
  text-align: center;
  font-family: Istok Web;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
  cursor: pointer;
  transition: color 0.2s;
  text-decoration: none;

  &.selected {
    color: #4AA9FF;
  }

  &.not-selected {
    color: #919191;
  }

`;

const Line = styled.hr`
    width: 76%;
    height: 0px;
    flex-shrink: 0;
    stroke-width: 3px;
    stroke: #B8B8B8;
    // margin-left : 30px;
    margin: 0 auto; 
    margin-top: 10px;
`
const WriteButton = styled.a`
    color : #FFF;
    border : none;
    border-radius: 5px;
    background-color : #A4C3FF;
    padding: 5px 13px;
    text-decoration: none;
`
const CustomLink = styled(Link)`
  display: block; /* Make the link take the full width of the container */
  text-decoration: none; 
  color: #4AA9FF;
  width: 100%; /* Ensure the link spans the whole container width */
  height: 100%; /* Ensure the link spans the whole container height */
  padding: 0; /* Remove padding to ensure link covers the whole space */
`;




function TabContent(props) {
    const [data, setBoardData] = useState([]);
    useEffect(() => {
        axios
        .get(`${API_BASE_URL}` + `/api/board/`)
        .then(function (response) {
          setBoardData(response.data);
          console.log(data);
        })
        .catch(function (error) {
            console.log(data);
          console.error(error);
        });
    }, []);


    useEffect(() => {
        props.setOnOff(true);
    })
    if (props.clickedTab === 0) {
        
        return (
            <div style={{width : '80%', display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
       

        <TabContentTitle className="mt-5">
            <ArticleList>

                {data.map((item) => (
                    <CustomLink key={item.id} to={"/BoardDetail?id=" + `${item.id}`  }>                       
                    
                     <Article key={item.id}>
                      <Left>

                          <Title>{item.title}</Title>

                          <Content>{item.content}</Content>
                          <AboutArticle>{item.nickname} 조회수 {item.hits} 댓글수 {item.commentCount} 좋아요 {item.likeCount}</AboutArticle>
                      </Left>
                      {/* <Img src={item.img} /> */}
                  </Article>
                   </CustomLink>
                ))}
            </ArticleList>


        </TabContentTitle>
  
        </div>)
    } else if (props.clickedTab === 1) {
        return (
        <div style={{width : '80%', display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
        <TabContentTitle className="mt-5">
            <ArticleList>

                {data.map((item) =>
                    item.boardType === '취업준비' ? (
                        <CustomLink key={item.id} to={"/BoardDetail?id=" + `${item.id}`  }>     


                        <Article key={item.id}>
                        <Left>

                            <Title>{item.title}</Title>

                            <Content>{item.content}</Content>
                            <AboutArticle>{item.nickname} 조회수 {item.hits} 댓글수 {item.commentCount} 좋아요 {item.likeCount}</AboutArticle>
                        </Left>
                        {/* <Img src={item.img} /> */}
                    </Article>
                    </CustomLink>
                    ) : null
                )}
            </ArticleList>
        </TabContentTitle>
        </div>)
    } else if (props.clickedTab === 2) {
        return (
            <div style={{width : '80%', display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
                <TabContentTitle className="mt-5">
            <ArticleList>

            {data.map((item) =>
                    item.boardType === '국비교육' ? (
                        <CustomLink key={item.id} to={"/BoardDetail?id=" + `${item.id}`  }>     


                        <Article key={item.id}>
                        <Left>

                            <Title>{item.title}</Title>

                            <Content>{item.content}</Content>
                            <AboutArticle>{item.nickname} 조회수 {item.hits} 댓글수 {item.commentCount} 좋아요 {item.likeCount}</AboutArticle>
                        </Left>

                    </Article>
                    </CustomLink>
                    ) : null
                )}
            </ArticleList>
        </TabContentTitle>
        </div>)
    }
    
    else if (props.clickedTab === 3) {
        return (
            <div style={{width : '80%', display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
            <TabContentTitle className="mt-5">
            <ArticleList>

            {data.map((item) =>
                    item.boardType === '학습공유' ? (
                        <CustomLink key={item.id} to={"/BoardDetail?id=" + `${item.id}`  }>     


                        <Article key={item.id}>
                        <Left>

                            <Title>{item.title}</Title>

                            <Content>{item.content}</Content>
                            <AboutArticle>{item.nickname} 조회수 {item.hits} 댓글수 {item.commentCount} 좋아요 {item.likeCount}</AboutArticle>
                        </Left>
                        {/* <Img src={item.img} /> */}
                    </Article>
                    </CustomLink>
                    ) : null
                )}
            </ArticleList>
        </TabContentTitle>
        </div>)
    } else if (props.clickedTab === 4) {

        return (
            <div style={{width : '80%', display: 'flex', justifyContent: 'center', marginLeft: '150px'}}>
            <TabContentTitle className="mt-5">
            <ArticleList>
            {data.map((item) =>
                    item.boardType === '취뽀후기' ? (
                        <CustomLink key={item.id} to={"/BoardDetail?id=" + `${item.id}`  }>     


                        <Article key={item.id}>
                        <Left>

                            <Title>{item.title}</Title>

                            <Content>{item.content}</Content>
                            <AboutArticle>{item.nickname} 조회수 {item.hits} 댓글수 {item.commentCount} 좋아요 {item.likeCount}</AboutArticle>
                        </Left>
                        {/* <Img src={item.img} /> */}
                    </Article>
                    </CustomLink>
                    ) : null
                )}
            </ArticleList>
        </TabContentTitle>
        </div>)
    }
};



export default function BoardList({token}) {

//토큰부분
    const handleWriteButtonClick = () => {
        if (!token) {
          // 토큰이 있다면 글쓰기 페이지로 이동
          window.location.href = '/BoardWrite';
        } else {
          // 토큰이 없다면 알림 띄우고 네이버 홈페이지로 이동
          alert('로그인이 필요한 화면입니다.');
          window.location.href = '../'; // 원하는 URL로 변경
        }
      };








    let [clickedTab, setClickedTab] = useState(0);
    let [onOff, setOnOff] = useState(false);

    return (
        <div >
            <Nav className="nav nav-underline" variant="tabs" defaultActiveKey="0">
                <TabItem className="nav-item" eventKey="0" onClick={() => { setOnOff(false); setClickedTab(0) }}>
                    <Tab aria-current="page" href="#" className={0 === clickedTab ? 'selected' : 'not-selected'}>전체</Tab>
                </TabItem>
                
                <TabItem className="nav-item" eventKey="1" onClick={() => { setOnOff(false); setClickedTab(1) }}>
                    <Tab className={1 === clickedTab ? 'selected' : 'not-selected'}>취업준비</Tab>
                </TabItem>
                <TabItem className="nav-item" eventKey="2" onClick={() => { setOnOff(false); setClickedTab(2) }}>
                    <Tab className={2 === clickedTab ? 'selected' : 'not-selected'}>국비교육</Tab>
                </TabItem>
                <TabItem className="nav-item" eventKey="3" onClick={() => { setOnOff(false); setClickedTab(3) }}>
                    <Tab className={3 === clickedTab ? 'selected' : 'not-selected'}>학습공유</Tab>
                </TabItem>
                <TabItem className="nav-item" eventKey="4" onClick={() => { setOnOff(false); setClickedTab(4) }}>
                    <Tab className={4 === clickedTab ? 'selected' : 'not-selected'}>취뽀후기</Tab>
                </TabItem>
                <WriteButton onClick={handleWriteButtonClick}>글쓰기</WriteButton>
            </Nav>
        <Line />

            <CSSTransition in={onOff} classNames="show" timeout={1000}>
                <TabContent clickedTab={clickedTab} setOnOff={setOnOff} />
            </CSSTransition>
        </div>
    );
}




