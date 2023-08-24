import {React, useState } from 'react';
import Navbar from '../components/common/Navbar';
import EduSearchHeader from '../components/EduList/EduSearchHeader';
import EduListTitle from '../components/EduList/EduListTitle';
import EduListContent from '../components/EduList/EduListContent';
import Footer from '../components/common/Footer';



const EduList = () => {
    const [searchKeyword, setSearchKeyword] = useState('');

    return (
        <div>
            <Navbar/>
            <EduSearchHeader setSearchKeyword={setSearchKeyword}/>
            <EduListTitle />
            <EduListContent searchKeyword={searchKeyword}/>
            <Footer/>
        </div>
    );
};

export default EduList;