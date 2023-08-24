import React from 'react';
import EduHeader from '../components/Curriculum/EduHeader';
import CurriculumContent from '../components/Curriculum/CurriculumContent' 
import Navbar from '../components/common/Navbar';
import EduHead from '../components/EduDetail/EduHead';
import Footer from '../components/common/Footer';



const Curriculumn = () => {
    return (
        <div>
            <Navbar/>
            <EduHead />
            <EduHeader />
            <CurriculumContent/>
            <Footer/>
        </div>
    );
};

export default Curriculumn;