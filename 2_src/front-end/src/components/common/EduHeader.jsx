import React from 'react';
import eduimage from '../../assets/EduDetail/eduimage.svg';

const EduHeader = () => {
    const headerStyle = {
        width: '100wh',
        height: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative', // Add position relative
    };
    
    const textStyle = {
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Istok Web', // Correct the spelling of 'fontFamily'
        fontSize: '20px', // Correct the spelling of 'fontSize'
        fontStyle: 'normal', // Correct the spelling of 'fontStyle'
        fontWeight: '700', // Correct the spelling of 'fontWeight'
        lineHeight: 'normal', // Correct the spelling of 'lineHeight'
        textTransform: 'capitalize', // Correct the spelling of 'textTransform'
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'row', // Change to 'row' to align buttons horizontally
        justifyContent: 'center',
        position: 'relative', // Add position absolute
        top: '300%', // Align to the center vertically
        left: '50%', // Align to the center horizontally
        transform: 'translate(-50%, 50%)', // Move the container to the center
    };

    const buttonStyle = {
        background: 'blue',
        color: 'white',
        padding: '10px 20px', // Increase padding to make the buttons longer
        margin: '0 10px',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    return (
        <div style={headerStyle}>
            <img src={eduimage} alt='Logo' className='d-inline-block align-top' />
            <div style={textStyle}>
                <div>멀티캠퍼스</div>
                <div>AI 백엔드 취업캠프(Python)</div>
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
