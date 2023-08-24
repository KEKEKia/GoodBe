import React from 'react';
import eduimage from '../../assets/EduDetail/eduimage.svg';

const EduHeader = () => {
    const headerStyle = {
        width: '100%',
        height: '400px',
        position: 'relative',
        backgroundImage: `url(${eduimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const textStyle = {
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Center both vertically and horizontally
        fontFamily: 'Istok Web',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        textTransform: 'capitalize',
        textAlign: 'center',
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
    };

    const buttonStyle = {
        background: '#8186FF',
        color: 'white',
        margin: '10px',
        borderRadius: '5px',
        cursor: 'pointer',
        width: '150px',
        height: 'auto',
        fontWeight: 'bold',
        fontFamily: 'Istok Web',
        fontSize: '1.2rem',
    };

    return (
        <div style={headerStyle}>
            <div style={textStyle}>
                <div style={{ fontSize: '24px' }}>멀티캠퍼스</div>
                <div style={{ fontSize: '36px' }}>AI 백엔드 취업캠프(Python)</div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div style={buttonContainerStyle}>
                    <button style={buttonStyle}>채팅방 입장</button>
                    <button style={buttonStyle}>상담신청</button>
                    <button style={buttonStyle}>찜하기</button>
                </div>
            </div>
        </div>
    );
};

export default EduHeader;
