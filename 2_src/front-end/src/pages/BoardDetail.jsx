
import React from 'react';
import BoardDetailContent from '../components/BoardDetail/BoardDetailContent';
import ReviewList from '../components/BoardDetail/ReviewList';
import Navbar from '../components/common/Navbar'

const BoardDetail = () => {
    return (
        <div>
            <Navbar/>
            <BoardDetailContent />
            <ReviewList />
            
            <h1>test</h1>
            
        </div>
    );
};

export default BoardDetail;

