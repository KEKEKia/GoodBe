import React from 'react';
import styled from 'styled-components';
import KHimg from '../../assets/main/KHimg.svg';


const Container = styled.div`
    margin-left: 250px;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    // gap: 20px;
`

const ReviewHeader = styled.p`
    color: #000;
    text-align: center;
    font-family: Istok Web;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
`

const EduContainer = styled.div`
    fill: #FFF;
    stroke-width: 1px;
    stroke: #ACACAC;
    border: 1px solid #ACACAC; 
    border-radius: 10px;
    padding-top:15px;
    padding-bottom:10px;
    display: flex;
    margin: 5px 5px; 
    width: calc((100%) / 3 - 5px);
`

const Edutitle = styled.p`
    color: #000;
    text-align: left;
    font-family: Istok Web;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;
    margin: 0;

    display: flex;
    width: 189px;
    height: 30px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
`

const EduDetail = styled.p`
    color: #565656;
    text-align: left;
    font-family: Istok Web;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: capitalize;


    
`

const Eduimg = styled.img`
    width: 80px;
    height: 20px;
    flex-shrink: 0;
    margin-right: 100px; 
    margin-top: auto;
`
const Row = styled.div`
    display: flex;
    flex-direction: row; 
    align-items: center; 
    width: 100%;
    
`;
const CenteredContainer = styled.div`
    justify-content: space-between;
    max-width: 1000px;
    margin-bottom: 20px;
    width: 100%;
`;

const EduInfo = styled.div`
    padding-right : 30px;
    padding-left: 20px;

`

const EduTop6 = () => {
    const dummyData = [
        { id: 1, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정', image:KHimg},
        { id: 2, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정', image:KHimg},
        { id: 3, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정', image:KHimg },
        { id: 4, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정', image:KHimg},
        { id: 5, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정', image:KHimg},
        { id: 6, Edutitle: 'KH영상아카데미', EduDetail: 'JAVA 웹 개발 6주 과정', image:KHimg },
    
    ]
    const groupedDummyData = [];
    for (let i = 0; i < dummyData.length; i += 3) {
        groupedDummyData.push(dummyData.slice(i, i + 3));
    }

    return (
        <Container>
            <Row>
                <ReviewHeader>🔥 리뷰 TOP 6</ReviewHeader>
            </Row>
       

            <CenteredContainer>
                {groupedDummyData.map((row, rowIndex) => (
                    <Row key={rowIndex}>
                        {row.map((item) => (
                            <EduContainer key={item.id}>
                                <EduInfo>
                                    <Edutitle>{item.Edutitle}</Edutitle>
                                    <EduDetail>{item.EduDetail}</EduDetail>

                                </EduInfo>
                                <Eduimg src={item.image} alt="KHimg" />
                            </EduContainer>
                        ))}
                    </Row>
            ))}
            </CenteredContainer>
        </Container>
       
          
   
    )
};

export default EduTop6;