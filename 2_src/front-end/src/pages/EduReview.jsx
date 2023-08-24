import React from 'react';
import Navbar from '../components/common/Navbar';
import EduHeader from '../components/EduReview/EduHeader';
import EduDetailContent from '../components/EduReview/EduReviewContent';
import Footer from '../components/common/Footer';

const EduReview = () => {
    return (
        <div>
            <Navbar/>
            <EduHeader/>
            <EduDetailContent/>
            <Footer/>
        </div>
    );
};

export default EduReview;