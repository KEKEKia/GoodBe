import React from 'react';
import styled from 'styled-components'
import Cyber_security_emoji from '../../assets/MyInfoChange/Cyber_security_emoji.svg'
import CatProfile_Circle from '../../assets/MyInfoChange/CatProfile_Circle.svg'
import { useEffect, useState } from 'react';
import axios from 'axios';


const API_BASE_URL = 'https://i9a801.p.ssafy.io';

const Title = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    margin-top : 30px;
`;

const TitleDetail = styled.p`
    color: #64686C;
    text-align: center;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
`

const TitleSmall = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 30px;
    font-style: normal;
    line-height: normal;
    text-transform: capitalize;
    width: auto;
`
const DetailSmall = styled.p`
    color: #202020d4;
    text-align: center;
    font-family: Istok Web;
    font-size: 18px;
    font-style: normal;
    line-height: normal;
    text-transform: capitalize;
    text-align: left;
   
`

const FirstBox = styled.div`
    display: flex;
    align-items: center;
    background: #FFF;
    width: 1000px; 
    background: #FFF;
    height : auto;
    margin-bottom: 20px;
    /* border: 1px solid #64686C; */
`
const SecondBox = styled.div`
    display: flex;
    background: #FFF;
    width: 100%; 
    margin: auto;
    padding-top: 20px;
    padding-left: 20px;
    background: #FFF;
    flex-direction: column;
    height : 100%;
    margin-bottom: 20px;
    /* border: 1px solid #64686C; */
`   
const ThirdBox = styled.div`
    display: flex;
    background: #FFF;
    width: 100%; 
    background: #FFF;
    height : auto;
    /* border: 1px solid #64686C; */

`
const FourthBox = styled.div`
    display: flex;
    background: #FFF;
    width: 90%; 
    background: #FFF;
    height : auto;
    flex-direction: column;
    margin-top: 10px;
`

const ContentBox = styled.div`
    display: flex;
    background: #FFF;
    padding: 10px;
    margin : auto;
    margin-bottom: 30px;
    width: 1000px; 
    border-radius: 10px;
    border: 1px solid #64686C;
    background: #FFF;
    height : auto;
`


const ContentBoxDetailUnderlined = styled.div`
    display: flex;
    background: #FFF;
    padding-bottom: 0%;
    width: 95%; 
    background: #FFF;
    height : 5rem;
    border-bottom : 1px solid #64686C;
`
const SeparatedContentBox1 = styled.div`
    display: flex;
    background: #FFF;
    padding-top: 30px;
    margin-bottom: 10px;
    width: 15%; 
    background: #FFF;
    height : 20px;
`
const SeparatedContentBox2 = styled.div`
    display: flex;
    background: #FFF;
    padding-top: 30px;
    width: 60%; 
    background: #FFF;
    height : 15px;
`
const SeparatedContentBox3 = styled.div`
    display: flex;
    background: #FFF;
    padding-top: 30px;
    width: 20%; 
    background: #FFF;
    height : auto;
`
const SaveButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: -40px; /* 조정할 값 */
    margin-bottom: 30px;
`;

const ReviseButton = styled.button`
    border : rgba(85, 143, 255, 0.65);
    border-radius: 10px;
    background: rgba(85, 143, 255, 0.65);
    color: #FFF;
    text-align: center;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    padding: 5px;
`
const MyPageInformationHeader = () => {

    const [userInfo, setUserInfo] = useState(null);

    const handleInputChange = (fieldName, value) => {
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [fieldName]: value,
        }));
    };

    const handleInputBlur = (fieldName, value) => {
        const updatedUserInfo = {
            ...userInfo,
            [fieldName]: value,
        };
        setUserInfo(updatedUserInfo);
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await axios.get(
                `${API_BASE_URL}/api/mypage/memberinfo`
                );
                setUserInfo(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleSaveChanges = async () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb29nbGVfMTA4MDA1NDgyOTExODE3NzI4MDA1IiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2OTIzNDQwNDV9.zAosniWvVjPawZCaeAr7f3M7TTkaorArIHAdvmBQ4ik';
        try {
            const memberUpdateData = {
                name: userInfo.name,
                nickname: userInfo.nickname,
                birth: userInfo.birth,
                address: userInfo.address,
                gender: userInfo.gender,
                favoriteCompany: userInfo.favoriteCompany,
                favoriteJob: userInfo.favoriteJob
            };

            const formData = new FormData();
            formData.append('memberUpdateRequest', new Blob([JSON.stringify(memberUpdateData)], {
                type: "application/json"
            }));

            try {
                const response = await axios.post(
                    'https://i9a801.p.ssafy./mypage/memberinfo/update',
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
                setUserInfo(response.data);
            } catch (error) {
                console.error("수정 실패:", error);
                alert("수정 실패");
            }
        } catch (error) {
            console.error("오류:", error);
        }
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '90vh',
        maxWidth: '1000px',
        marginLeft : '350px',
    };
    const imgStyle = {
        width: '350px',
        height: 'auto',
        marginBottom: '10px' 
    };


    return (
        <div style={containerStyle}>
            <div>

  
            <Title>개인 정보</Title>
            <TitleDetail>맞춤 교육 및 채용공고정보를 제공하기 위해 사용되는 나와 내 환경설정에 관한 정보입니다.</TitleDetail>
            <br/>
            <br/>
            <FirstBox>
                    <SecondBox>
                        <ThirdBox>
                        <TitleSmall>
                        GoodBe에 표시되는 프로필 정보
                        </TitleSmall>
                        </ThirdBox>

                        <FourthBox>
                            <DetailSmall>
                        개인 정보 및 이를 관리하기 위한 옵션입니다. 타인에게 보이는 닉네임, 프로필 사진을 설정할 수 있습니다. 
                        </DetailSmall>
                        <DetailSmall>
                        프로필 정보도 한눈에 확인할 수도 있습니다.
                        </DetailSmall>
                        </FourthBox>
                    </SecondBox>
             <img src={Cyber_security_emoji} alt="myprofile" style={imgStyle} /> 
            </FirstBox>

        <ContentBox>

            <SecondBox>
                   
                   <ThirdBox>

                   <TitleSmall>
                   기본 정보
                   </TitleSmall>

                   </ThirdBox>

                   <FourthBox>

                       <DetailSmall>
                       일부 정보가 GoodBe 서비스를 사용하는 다른 사람에게 표시될 수 있습니다
                   </DetailSmall>
                   
                   </FourthBox>
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    프로필 사진
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     사진을 추가하면 다른 사람이 나를 알아보기 쉬워지며 내가 계정에 로그인되어 있는지 확인할 수 있습니다.
                    </SeparatedContentBox2>
                    <SeparatedContentBox3>
                    {userInfo ? userInfo.profileImage : ''}
                    </SeparatedContentBox3>
                   </ContentBoxDetailUnderlined>
               
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    닉네임
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     <input
                            type="text"
                            value={userInfo ? userInfo.nickname : ''}
                            onChange={(e) => handleInputChange('nickname', e.target.value)}
                            onBlur={(e) => handleInputBlur('nickname', e.target.value)}
                            style={{ width: '100%', padding: '13px', fontSize: '17px' }}
              
                    />

                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    생년월일
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     <input
                            type="text"
                            value={userInfo ? userInfo.birth : ''}
                            onChange={(e) => handleInputChange('birth', e.target.value)}
                            onBlur={(e) => handleInputBlur('birth', e.target.value)}
                            style={{ width: '100%', padding: '13px', fontSize: '17px' }}
                            placeholder='YYYY-MM-DD'
                    />
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>               
                   
                   
                   
                    <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    성별
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     <input
                            type="text"
                            value={userInfo ? userInfo.gender : ''}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            onBlur={(e) => handleInputBlur('gender', e.target.value)}
                            style={{ width: '100%', padding: '13px', fontSize: '17px' }}
                            readOnly
                    />
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

            </SecondBox>

        </ContentBox>


        

        <ContentBox>

            <SecondBox>
                   
                   <ThirdBox>

                   <TitleSmall>
                   관심 취업 정보
                   </TitleSmall>

                   </ThirdBox>

                   <FourthBox>
                       <DetailSmall>
                       관심 취업 정보는  GoodBe 서비스를 사용하는 과정에서 이용될 수 있습니다
                   </DetailSmall>
                   </FourthBox>
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    관심 회사
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     <input
                            type="text"
                            value={userInfo ? userInfo.favoriteCompany : ''}
                            onChange={(e) => handleInputChange('favoriteCompany', e.target.value)}
                            onBlur={(e) => handleInputBlur('favoriteCompany', e.target.value)}
                            style={{ width: '100%', padding: '13px', fontSize: '17px' }}
                    />
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

                    <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    관심 직무
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     <input
                            type="text"
                            value={userInfo ? userInfo.favoriteJob : ''}
                            onChange={(e) => handleInputChange('favoriteJob', e.target.value)}
                            onBlur={(e) => handleInputBlur('favoriteJob', e.target.value)}
                            style={{ width: '100%', padding: '13px', fontSize: '17px' }}
                    />
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

            </SecondBox>

        </ContentBox>

<ContentBox>

            <SecondBox>
                   
                   <ThirdBox>

                   <TitleSmall>
                   개인 정보
                   </TitleSmall>

                   </ThirdBox>

                   <FourthBox>

                       <DetailSmall>
                       일부 정보가 GoodBe 서비스를 사용하는데 사용될 수 있습니다.
                   </DetailSmall>
                   
                   </FourthBox>
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    이름
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     <input
                            type="text"
                            value={userInfo ? userInfo.name : ''}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            onBlur={(e) => handleInputBlur('name', e.target.value)}
                            style={{ width: '100%', padding: '13px', fontSize: '17px' }}
                    />
                    </SeparatedContentBox2>

                   </ContentBoxDetailUnderlined>
               
                   <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    이메일
                    </SeparatedContentBox1>
                     <SeparatedContentBox2>
                     <input
                            type="text"
                            value={userInfo ? userInfo.email : ''}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            onBlur={(e) => handleInputBlur('email', e.target.value)}
                            style={{ width: '100%', padding: '13px', fontSize: '17px' }}
       
                    />
                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

                    <ContentBoxDetailUnderlined >
                    <SeparatedContentBox1>
                    거주지역    
                    </SeparatedContentBox1>
                    <SeparatedContentBox2>
    
                    {userInfo?.address?.city} {userInfo?.address?.street} {userInfo?.address?.zipcode}

                    </SeparatedContentBox2>
                  
                   </ContentBoxDetailUnderlined>

            </SecondBox>

        </ContentBox>

        <br/>
        <SaveButtonContainer>
            <ReviseButton onClick={handleSaveChanges}>수정하기</ReviseButton>
        </SaveButtonContainer>


        </div>
        </div>
    );
};

export default MyPageInformationHeader;