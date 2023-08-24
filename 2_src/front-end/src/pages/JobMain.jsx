import {React, useState } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import SearchJob from '../components/JobMain/SearchJob';
import JobList from '../components/JobMain/JobList';
import BannerJobMain from '../components/JobMain/BannerJobMain';
import JobTab from '../components/JobMain/JobTab';


const JobMain = () => {
    const [searchKeyword, setSearchKeyword] = useState('');
 
    return (
        <div>
            <Navbar/>
            {/* <br/> */}
            {/* <br/> */}
            <SearchJob setSearchKeyword={setSearchKeyword}/>
            <JobTab />
            <JobList searchKeyword={searchKeyword}/>
            {/* <br/>
            <br/>
            <br/>
            <br/> */}
            <BannerJobMain/>
            {/* <br/>
            <br/>
            <br/> */}
            <Footer/>
        </div>
    );
};

export default JobMain;