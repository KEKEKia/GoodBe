import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Container1 = styled.div`
  width : 80%;
  padding : 10px;
  height: auto;
  margin-top : 10px;
  margin-left : 15%;
  text-decoration: none; 
  /* border: 1px solid black; */
`
const VideoCard = styled.div`
  border: 1px solid #ffffffd0;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  background-color: #fffffff8;
  text-decoration: none; 
  &:hover {
    text-decoration: none; 
    /* background-color: #ffffffed; */
  }

  img {
    width: 100%;
    text-decoration: none; 
  }

  h3 {
    margin-top: 10px;
    font-size: 1rem; /* 조금 작은 글씨 크기 */
    font-weight: bold;
    color: #2121c8d0;
    text-decoration: none; /* 밑줄 없음 */
  }
  h4 {
    margin-top: 10px;
    font-size: 1.5rem; /* 조금 작은 글씨 크기 */
    font-weight: bold;
    color: #0000ffbe;
    text-decoration: none; /* 밑줄 없음 */
  }
`
;

const VideoRecommendWrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center; /* 중앙 정렬 */
  margin-top: 20px;
  text-decoration: none; 
  /* border : 1px solid black; */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftVideoCard = styled(VideoCard)`
  width: 55%;
  text-decoration: none; 
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const RightVideoCard = styled(VideoCard)`
  width: 55%; /* 오른쪽 썸네일 크기를 늘림 */
  text-decoration: none; 
  @media (max-width: 768px) {
    width: 100%;
  }
`;

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
}

function VideoRecommend() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const apiKey = 'AIzaSyC2ZUra2a_fg_lpD3zFO8OoFaM7s1BZ-Ac'; // 여기에 본인의 YouTube API 키를 넣어주세요.
    const searchQuery = 'IT코딩 취업후기';

    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&q=${searchQuery}&maxResults=3&part=snippet&type=video`
      )
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error('Error fetching YouTube videos:', error);
      });
  }, []);

  return (
    
    <Container1>
    <h2 style={{ fontSize: '2rem', fontWeight: 'bolder' }}>✈요즘 국비 교육</h2>
    <VideoRecommendWrapper>
      {videos.slice(0, 1).map((video) => (
        <LeftVideoCard key={video.id.videoId}>
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h4>{truncateText(video.snippet.title, 20)}</h4>
          </a>
        </LeftVideoCard>
      ))}
      <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        {videos.slice(1).map((video) => (
          <RightVideoCard key={video.id.videoId}>
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
              />
              <h3>{truncateText(video.snippet.title, 20)}</h3>
            </a>
          </RightVideoCard>
        ))}
      </div>
    </VideoRecommendWrapper>
  </Container1>
   
  );
}

export default VideoRecommend;
