import React from 'react';
import WriteBoard from '../components/BoardWrite/WrtieBoard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';


const BoardWrite = () => {
    return (
        <div>
            <Navbar />
            <WriteBoard />
            <Footer/>
        </div>
    );
};

export default BoardWrite;