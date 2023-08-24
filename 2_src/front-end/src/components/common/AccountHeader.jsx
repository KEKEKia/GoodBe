import React from 'react';
import goodbelogo from '../../assets/navbar/goodbelogo.svg';

const AccountHeader = () => {
    const logoContainerStyle = {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'flex-start',
        marginTop: '20px', 
    };

    const logoStyle = {
        width: '140px', 
        height: 'auto',
        marginBottom: '10px'
    };

    const lineStyle = {
        width: '100%', 
        borderBottom: '1px black',
    };

    return (
        <div style={logoContainerStyle}>

            <img src={goodbelogo} alt="goodbelogo" style={logoStyle}/>
            <hr style={lineStyle} />

        </div>
    );
};

export default AccountHeader;