import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const API_BASE_URL = 'https://i9a801.p.ssafy.io';
const ArticleBox = styled.div`
    // 전체박스
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    width: 80%;
    padding-top: 35px; 
    margin-left: 150px;
    margin-top : 50px;
`
//Header
const Header = styled.div`
    //게시글 상단 

    display: flex;
    flex-direction: column;
    padding: 10px 10px 0px 10px;
    width: 95%;
  

    
`
const BoardType = styled.a`
            //게시판 정보
    text-decoration-line: none;
    color: #000;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    text-align: start;
    margin: 0 0 5px 10px;
`
const Title = styled.div`
            //게시글 제목
            color: #000;
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-align: start;

margin: 0 0 10px 10px;


`

const ArticleDetails = styled.div`
            //프로필 이미지, 작성자 정보, 작성일, 좋아요 등등
            // display: flex;
            // flex-direction: row;
            display: flex;
          
            align-items: center;
            padding: 10px 0 0 0;
            margin-bottom: 10px;
            justify-content: space-between;
            

            

`
const TempDiv1=styled.div`
    display: flex;
    flex-direction: row;
    width: 70%;
    height: 100%;
`
const ProfileImg1 = styled.img`
    //프로필 이미지
    width: 70px;
    height: 70px;
    border-radius: 100px;
`

const WriteInfo = styled.div`
    //작성정보
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: flex-start;
    padding: 10px 0 0 10px;

    color: #757575;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    
`
const Writer = styled.div`
                    //작성자 닉네임
`
const RegDate = styled.div`
                    //작성일
`
const Cnts = styled.div`
                //조회수, 댓글수, 좋아요 수
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items:end;
    height:70px;
    margin-bottom: 10px;
   
`
const Cnt = styled.div`
                    //~수 item정보
                    display: flex;
                    flex-direction: row;
                    align-items: baseline;
                    margin: 0 10px 0 10px;
                    height: 100%;
                    align-items: flex-end;
`
// 여기까지 헤더

//Main
const Main = styled.main`
    //메인 박스
    width: 95%;
    display: flex;
    flex-direction: column;
    margin-top: 20px; 
`
const Line = styled.hr`
  /* 가로선 스타일 */
  border: none;
  height: 2px;
  background-color: #2000E7F5;
  margin: 1px 0; 
`;

const LineLight = styled.hr`
  /* 가로선 스타일 */
  border: none;
  height: 1px;
  background-color: #B8B8B8;
  margin: 1px 0; 
`;



const Content = styled.p`
    //게시글 내용
    padding: 10px;
    text-align: start;
`
// 여기까지 메인

const Reviews = styled.aside`
    //리뷰들 박스
    display: flex;
    flex-direction: column;
    padding:10px 10px 10px 10px;
    width: 95%;
`
const ReviewItem = styled.div`
        //프로필 이미지, 댓글 작성자, 댓글 내용, 수정, 삭제
    
        width: 100%;
        justify-content: space-between;
        display: flex;
        align-items: center;
        margin-bottom :20px;
    `
const ProfileImg2 = styled.img`
            //리뷰작성자 프로필 이미지
            width: 50px;
            height: 50px;
            border-radius: 70px;
            // flex: 1;
        `
const ReviewDetail = styled.div`
            //리뷰 작성자, 내용
            display: flex;
            flex-direction: column;
            flex: 6;
        `
const ReviewWriter = styled.p`
                //리뷰작성자 닉네임
                color: #000;
                font-family: Inter;
                font-size: 20px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;

text-align: start;
margin: 5px 0 0 10px;
            `
const ReviewContent = styled.p`
                //리뷰 내용
                text-align: start;
                margin: 5px 0 0 10px;
            `
const ReviewManage = styled.div`
            //리뷰 수정, 삭제
            display: flex;
            flex-direction: row;
            align-items: baseline;
            align-items: end;
            width: 100%;
            flex: 3;
            justify-content: flex-end
            
        `
const ManageBtn = styled.a`
                //수정, 삭제 버튼
                color: gray;
                margin: 0 5px 0 5px;
            `
const ReviewWriteForm = styled.div`
        //리뷰 작성 폼
        width: 95%;
        border-radius: 5px;
        border: 3px solid #B5B5B5;
        background: #FFF;
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
       
    `

    const LeftForm=styled.div`
        display: flex;
        flex-direction: column;
        width: 90%;
    `

    const NewReview = styled.textarea`
    //리뷰 작성창
    border: none;
    background: #FFF;
    width: 100%;
    padding: 10px;

    color: #000;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
   
`

const ArticleEdits = styled.div`
        //글작성, 수정, 목록 버튼 박스
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 95%;
        align-items: baseline;
        margin-bottom: 30px;
    `
const TempDiv=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
`
const BtnBlue = styled.a`
        //파란 버튼
    border-radius: 10px;
    background: #425CE7;
    color: #FFF;
    font-family: Inter;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding : 10px;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    height: 50px;

`
const BtnOutlineGray = styled.a`
        //회색 테두리 버튼 
        border-radius: 5px;
        border: 1px solid #4E4E4E;

        color: #000;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding: 10px;
        margin-left: 10px; 
        text-decoration-line: none;
`
const CommentIcon = styled(FontAwesomeIcon)`
  margin-right: 8px; 
`;
const LikeIcon = styled(FontAwesomeIcon)`
  margin-right: 8px; 
`;
const CountIcon = styled(FontAwesomeIcon)`
  margin-right: 8px; 
`;


  
const BoardDetailContent = () => {
    var searchString =  useLocation().search;
    const params = new URLSearchParams(searchString);

  const keyword = params.get('id');


  const [boardData, setBoardData] = useState(null);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/board/${keyword}`)
      .then(function (response) {
        console.log(keyword);
        console.log(response.data);
        setBoardData(response.data);
      })
      .catch(function (error) {
        console.log(keyword);
        console.error(error);
      });
  }, []);


  if (!boardData) {
    return <div>{boardData}</div>;
  }

  return (
        <>
            <ArticleBox>
                {/* 게시글 헤더 */}
                <Header>
                    <BoardType href="../BoardMain" > > 취업준비</BoardType>
                    <Title > {boardData.title}  </Title>
                    <ArticleDetails>

                        <TempDiv1>
                            <ProfileImg1 src="https://i.namu.wiki/i/EbHl4I2dCr3aoC7AFjMYv7zBAFQTE0Cr0-r2XiIKLakxARH3BY9eonE3AZ2_ctET_2vpLI-piN4F224wAUdyyQ.webp"/>
                            <WriteInfo>
                                <Writer>도라도라미</Writer>
                                <RegDate>작성일 2022-11-28</RegDate>
                            </WriteInfo>
                        </TempDiv1>
                        <Cnts>
                            <Cnt>
                                {/* 조회수 아이콘과 글씨 */}
                                <CountIcon icon={faEye} />
                                <div> 10</div>

                            </Cnt>
                            <Cnt>
                                {/* 댓글수 아이콘과 글씨 */}
                                <CommentIcon icon={faComment} />
                                <div> 10</div>
                            </Cnt>
                            <Cnt>
                                {/* 좋아요수 아이콘과 글씨 */}
                                <LikeIcon icon={faThumbsUp} />
                                <div> 10</div>
                            </Cnt>
                        </Cnts>
                    </ArticleDetails>
                </Header>
                {/* 게시글 내용  */}
                <Main>
                    <Line/>
                
                    <Content>
                    {boardData.content}
                    </Content>
                    <Cnts>
                        
                        <Cnt>
                                {/* 댓글수 아이콘과 글씨 */}
                                <CommentIcon icon={faComment} /> 
                                <div>댓글수 10</div>
                            </Cnt>
                            <Cnt>
                                {/* 좋아요수 아이콘과 글씨 */}
                                <LikeIcon icon={faThumbsUp} />
                                <div>좋아요 10</div>
                            </Cnt>
                    </Cnts>
                    <Line/>
                </Main>



                {/* 게시글 댓글 */}
                <Reviews>
                    {/* review item은 반복문으로 나타낼 예정 */}
                    {boardData.comments.map((item)=>(
                        <ReviewItem>
                        <ProfileImg2 src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgVFRUYGBISGBUSGBIYEhESEhEYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDE0NDQxNDQ0NDQ0MTQ0ND80P//AABEIAPsAyQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADkQAAIBAgQEBAQEBAYDAAAAAAECAAMRBBIhMQVBUWEGInGBEzKRobHB0fAUUmLxFSNCgtLhM3KS/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAQEAAgIDAQEAAAAAAAAAARECEiExQQNRYXET/9oADAMBAAIRAxEAPwDjxETHAjGU0IxrxiYpJnvHEjJAQBSUYCH0uDVnXMqEj8YACI94nplTYixHI8o0AlFEIogQkpGSvAFFFeKBmtHEUUAUUUUAUUUUAUUUUCKKPFAlUg0nINLBohHVLxIhvFQn8M6d5bVolbTbwWALKtxtNCnwHObsdDy6SNDC4Jw81XFx5V1M9BoEIAOkHw2ESktlAA/GQqVpPXSuedYfi3AJ/wCRdCdD3nJmdP4jxeZQnTWcuxlc/BWHvHkY8oHjR7RWgCElEBFAFFFFFgKPaK8UMBWjR49oYDWiijQwHiivFeGEHLRyLyJhOGp5hpvK0FgkOcaaHedNhOEKSGsJTwvC39p0dJbCR10chUsOBpCcwAlQaUV6lhMr0vnnT4jEQCvigoOsBxfEVU2vMnE4++xhzzb8q6vj6ivH4jOSTAJPVoz0mFxY6fabRkjeSAkDJCMJxXikTAJXikQDLqeFdgSFNhqTaIK4vyl4wTkjynXtL6PD3LZSDcja2u4MNIIqXt3/AH+kdVvoBfvym7R4K7gKqm58t+pJN7e152fh/wAJU6AV6gD1NDl3RCNvUiLRrjeD+F69ezZCEv8AMfKLA2O/eB8V4PUwzEOtgSbHkR2nswOltgNgNBOf8YYRalBmIuafmXrfa3pr9oTqUZZ7eSkSMscSsyjKKKKAVvSYcppcLQjXrCsMpIF7Eek1KeHWTeik0Zg0AXaFZoPT0FpbS1mdrTmLxtMHjWNyAgbzfqDyzg+N18zkchFzztV1cgBnLG5kSYwMkLTdk7LwPwtHBqOuYglApGmwue+/2nY1uDYWpYtTAYCwdboQO1pzXhBilEg/zEg9QQJvrjR+zMevyeNxfP4fKayeK+BFe7UHGu6k216jl67dfXmE4BVpvkdCCDYg/wCodR19p6NSxdjpof3yhyVkqWzqCw2MrnuVPXPXLz5fCTsbi2oGp5G1j+U1cD4KRdajZr8hpbTXUzqatQAyBrgiF6KTVWE4BhqZutJNgLkZjpte81Dg0KkZFseWVbG20EpYi2h5feaNNwwi8tVmBV4eh1yL/wDIlT8Hpls+XzdZooZZaMqATDJT2Avy7RM8NZAYDidNBI61XOK2q23kMQA6MvJgR9oLXc7fWXYSpfSZ82+TfrmeOvI8fRKOyne5vy5wWdF4twpSsx5MTb9/vec4Z1xyGMUlFANjAt5RNSm0ycNoJo03mfVXzBytCsMJno0PwzzNrIMrp5faebY+mQ7E/wAxnpw1E5DjeB8xNtzeXzcrPqOWYSIMvxKWMomqHZ+Gq1qFr7MfbnDlxy38y39yPvMfgD3pkd4qLZmsEZtTzsR9pzfl5t69Ov8ABZ43XU4bGIeot1N7e/8A1NKjWFrg3nK06dj81iOR3+00aDkR8y/ae/G/Fa9fEXEAGMysOkg9W8DUZmIG5hdRzI6csHFwfeX8PrnY8tJzXDsQ9Msj8hcek2aFSwL9hFp3nPTbapZh3hKNeZ+GOcBofQFxcSuWfWSLbQfEJpfnCSbSpnPYTTESserhHbbRepvf2A1k8HhShtlY/wBTAC/ot7/WWYur1cegDE/b9ZRgnXPYBjruTv7D9Zn4zWnl1ef457xbRQuc2TUbtow9DbSefVqeUkDlznp3jCm4YFVVlKjRkVj7HeeecSVlazKFuAbKoX8JtGMrOIjyVo2WUYzCPoJp0nmPRYCaFB5l1F81pI0LoPM5HhVJplW/M9NzDvKMfhM+sjhnh97iEpdcvP8AiuCsSRMV1tO24xhSToN5zVTAm+nW035vph1MrY8OUAqEu62PIXY+ptNzD/BbyhnI5qlMIp9Tr9zOe4XSKadbwvE1HvlBIXkALCK/IldEtXD09FsG9Fdh6k3t7RjxBjs+noR+UwqFNhuPtNPB4fMbnaVIm40EU1B5j72Bmbi6Zp1FPt2PcTWr11RdWCgcyQJznEOM0qnkWqjVF1AVhmFu0nqQ+LdbTOH152IvLabEpl9vaYdLEXFxtoZr4N7iZXlvK6HDVrJ7TTwdZSoA3G/aczWr5KTOdlF55pi/Flao65qz0qTkBETIhIJ0Z3fRbjXlbvL5lZdZ9vewJB6QM80wHGcRg6lNHrGrTcqjByrPSZrALnAAYXIFx1BuZ6HhccrjW6t0P5GXv7RnrZdQbhyk3/WWU8Cqm4/CFAx4ei8qHxOFSoPML9+k8v8AFnDGFRiB5VGm55nnzM9XYzlPE5VgbDUbnpGUeVlIssLxNOzHrK8sD0Cj2hNGqRAxJ04WaJcbVGrC6VWY1KpD6LzHrl08dNvDVJqUHmHgSSZv0KdhJkV10aths0BHCdex1mzTlotK3Gea5nFYb4bDTSWU2BhvG0ulxymBTrERzpPXHtrWUSuvxBaY/Ibn0gYrE6DUmFUcKp1YXP4SvIv+cjhfFnEalRyhJCKqnICRmLZrZuosv3mBh6atSZ/lYMAihAptZrvnHMMFGXnm7T0Xj/hdq5D0ioqABWRzlV1GoswBykXNtOZHpl0PAuIcgVHSnTG+VjUf/aoFr76k6dDK5xnd0vCWNNanYm7JYH3AI/Ej2nd8Kwre05n/AA9cJf4a2VQAAB06nn695pcJ8WoFNwCFF2C+YqLXubXJ05WmXfWV0c8XqN3xJgWbDlE+ZiAb3tYG52nk1Xh/wmRMSuSrTtluQqVQuzoxsGB0uNwdxPZOEYz+IQVVUtSe+V8pAYaaqDyvfW3KatalTdLMiMo1ysisB3ykWl89ftl3z6x5NwHBvjKiU6S3RXR3dbGnRRXV2LMNMxy6LvrPZmpC1rbfWB0a6ouVQFUbKAFUegG0Y49ev3he+f2XPHUScsmxuJbTxJO4jU64aQZbHtJn8Vf6Id5yfiHiNOncWLP7WBm7j6uRCQZ55xPE52Nh73M0jKsqsSzFjudZDLLssWWM2QKcmEhYpx/hw0gypD8KhJtKRTmhg01k9NOflq4KjlmqjzPw72Gsv+IJm1wb8S0kal9pnGrG+NbYyLrSQXinDqRzInMMljNStipn1mBN77xc1XXP2VI2MNpue8HoLC0pR1MkXLicv6S6hjsxsBt2J/D06wV6f99/7/hGw9OxJ66WPmPvy9uXOE1PXjjQCgkHQnmeXoLafjMTi/CadN6dRLIDUAdFsisCDdtNj6db7zcLKguxsBz/ACmbikNY3I8o+UW2HfuZV9j8fq79Onw2LOQKNAAAALWtCFxJ56g9S32NzOawrPT0AzJ0vYr6du016NcMOkes7MvonU3O9u2v2j0V95MCWoknwnyrzuYIpC2ohoe4gVMSx6oUXPKacxn1Wdx/EhUtecKwN/WbvGMV8U26fSZGWaMlGSPkl4SLLJGs/LFll+SLLAQPaFYZ7SmosrRyDDr4a8/LeoV7y5n7TIpOdxCkxJ5iZtVz4m24g9TEy4up5QerTXpFhyha1YwYVDeX1EHKQWhJsxpuxo4Nr2msi/3mPQTJ68z+U0KNfSPGdooreMigfv8AfP8ACJHiJlSM7VbJn323hlCiJRThSvaGF5CEpCTyAShasuDx4NWU5ejQYNLKbXjkToumJDH07rCMNTlmMwhZdDr0lyJtcLiqNiev4wXLNfH0SDYjUQFkjSGCR8stKRskMADLEUl2WMRJPKExA0gaNrDsUNJnoIdNOWhTcS34hgay4PM20EfEaMKh6SFN7y0m0F5DZb7ya2+kZbGWqggklftLFEYJLUSETSViNoShkFp8hCadC8qRlTU5JLnU7SxwFBtv16SzBLdNeX4SsRaZFOnX8RCaa7DrqP0iNO2VT/KB77ydAcjuNjHheSapz+ohWGwgOoJB6cpOmmvrvLvhlD/T1iLRFNSu/wBZe2otHpsCJVUawlDGBxTDG+95iPTsZv4+uSe0yX1gqQCyRssIdJXaAwGALybqLSkGItDFBcUmkyVOs3Kq3Ew6/laLqHzRCxxIUWhAmdjXnpJCBJAk8oyCOtUA2iXqaAw2il4IHvsfaGYWKC30KSiOkkok0A3MkgvGipUU1Jl7tZdNzzkUElaOVnYaotlEMwq+Qe0FYXELw21o50m8iK9HNe29gR6iMgzDoRLhI0080rU+InDHSxhlM3GUwZF5winCUvFbTS0DxrEQt3sJl4qrfaFqpGdV1gzLD0XXWTxVBbXENXjMyXi/hxCVpE7R/hHpDScsWklF4A2JlT8QsLStJoswmHj/AJpUvFrG0pxGKz6wAihUhtN5hLWtDKFfvIsVK0qlSwlCVdZFnuIBiHKm8nD8nSUWBhiHpMDAYoMNDNejW7xYPJoIOZMvSoOUAU3lqDX0gejnrW3la4i8HprcX72iqJl1+4294E0Kb3h9FtJlYVwZpK9hACqRvCFIEEp1AovI03LGOBpU2vDEWwg+Fpw8rpLiKAr3MGalNM05MU16Qw9Yxoxmpm01alMShktEegadIjYR8h6TTRh0jWHSIa8NfEmBVsVNvhXh011zu+SnrYKA1R7aaX0Udzf0h9Twxhhp/mH+o1NfsAJplGOJL3m/wHhgrgu5IpocthoztvlB5C1rnvJ4vwyo1R2HZgGH1FvzhHB638Mnw6hUWZmzXJXUX5C/K23SGfsSI8T4XkF0Rco5ebNb/wBidYEmGytbsD9QD+c6UOlRFdXDU2AuwDCxyqWUX3IzAet+hmJj/jB2dUGQnRb+YAbD6CL1fg7NiappA8Uknh8fnBuLMNCp0IjVagMVTObLlAYaqab9p0WFrggazma66y3B48I1mO+0kWOzpVBCEaY2GxNxoYfTqwGtPCr5bdbwxEvcHawmdg6hOs1aB19pUidB1cMaZuvy9OkSYsdZsmmGFpj43hDA5k25j9JNipVtOqXPabeBw0yOG0bWvvOmwlhzhILoqjTsJbaIGPLxnqJEjaTijNArIlJZFJPVJpyOWXmNljw9eHcP4tUQWUZqfIakj0tNJeME/MhHs3/GBf4Ug1A+hIibh68gfqY/bSdT9NTh2KNZ2uAqIASN3cm9hroBoeUfivC0xAAYlcuwGgHtMNVq0XzIumxAF7joZq0OLsfmpPfsDb7iOWfYs34LDcM+ALoxc7kMbhrC2nQ25wvEYqmpsW1/lCOxHrYW+8iMY7fLTy/1Owa3ooA19biVGn11J1J5kncx/wCFf6w+KLnP+WhW9szsAGa2wCgmw94Dkcbi86VqI6StsMJFhWuXr5+kza9Jybmdo+CvyglXht+UWGy+FY4p5WvOlw1XNOer8OZdQIXw2sVNmiT1HZ4EbdJpJUF5iYbEC0KWpe1jGnmTW9TxQ95o4dweW85+kvPrrNjDVFAFzBd8fpZxCgAMw0I37wbDVmvfl0jY7FO9wiluV+X1ldCjVt8lvVhFfkTqyY3sNWPsYUaoEzMNhnt5iB6aw+lTC67nqd5UqLNX3ikS0jmjLEyYxMgWkS0FYneK8heK8WjHl2SLJCFS8TJbQywoCyQWWfDj5IBC0bLLQkmEjNR8KL4XaFinJClEAnwYv4ftDlpdpYtKTQzDgweUqfgyty16zcWjL1oxUOcTgrj5X06EXh1Dh1TTzL9DN1KUISlEPGM6hw57C7/RZpYfh6j5iW9Tp9IQiQhFiPDogGwklkGcAX5deUppY9SbWub20bT3uB+cBg9TJBpWDHBlQrE7xs0UaMFmldR8utifQXMVUkCDUNgudrjS9xc9yTzk2nIuo4jObZHF9msCCRvfpL8pkaeGSwF8w7sG+20t/h0/lX6CPC15++HB5kW2sbG/WL4BJDFrldrqPytL5NZRaHNPqZHJfa31hcSwALY6g265Wt9bWkmRj8tvfX7Q8SxYjCYdNwVIvrfNnX0GgIl60pcsuEAGWlLFpS8SSwPVAyg2Jse4NpO45EfXX6S8SYipBqCvz+pt9hCVqMp+TMOzAH/uTEtWI/lCnUc/6FA6Fzf6gS4Urm505ZV8qn15t7x1lgioU1lPIXA5XA5d4KKDFr/DT/c7Me9tABNESLRCVOmth/fT6ywStJOMrViyVowkhHKSLJeDvg0bdQfWENIgwOU9DDonyqB6AS6VrJwhV//Z"/>
                    
                        <ReviewDetail>
                            <ReviewWriter>{item.nickname}</ReviewWriter>
                            <ReviewContent>{item.content}</ReviewContent>
                        </ReviewDetail>
                        <ReviewManage>
                            <ManageBtn href="#">수정</ManageBtn>
                            <ManageBtn href="#">삭제</ManageBtn>
                        </ReviewManage>
                        <LineLight/>
                    </ReviewItem>

                    ))
                    
                    }
                    

                </Reviews>

                <ReviewWriteForm>
                    <LeftForm>

                        <ReviewWriter>냔냥이</ReviewWriter>
                        <NewReview placeholder='내용을 입력하세요'/>
                    </LeftForm>
                        <BtnBlue style={{width: "10%"}}>등록</BtnBlue>
                </ReviewWriteForm>

                <ArticleEdits>
                    <BtnBlue>글쓰기</BtnBlue>
                    <TempDiv>

                    <BtnOutlineGray href="#">수정</BtnOutlineGray>
                    <BtnOutlineGray href="#">목록</BtnOutlineGray>
                    </TempDiv>
                </ArticleEdits>




            </ArticleBox>
        </>
    )
}

export default BoardDetailContent