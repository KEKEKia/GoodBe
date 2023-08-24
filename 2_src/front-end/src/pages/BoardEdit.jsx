import React from 'react';
import EditBoard from '../components/BoardEdit/EditBoard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const BoardEdit = () => {
    return (
        <div>
            <Navbar/>
            <EditBoard/>
            <Footer/>
        </div>
    );
};

export default BoardEdit;