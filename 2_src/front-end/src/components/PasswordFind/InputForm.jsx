import React from 'react';

const InputForm = () => {
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const labelStyle = {
        marginRight: '10px',
    };
    
    const box = {
        border: '1px solid black', 
        borderRadius: '10px',
        padding: '20px', 
        width: '500px',
 
    };
    const container = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
 
    };
    const inputStyle = {
        flex: '1',
        padding: '5px',
    };

    return (
        <div style={container}>
            <div style={box}>
                <div style={containerStyle}>
                    <label style={labelStyle}>이름</label>
                    <input type="text" placeholder="가입할 때 입력하신 이름을 입력해주세요"
                     style={inputStyle}/>
                </div>
                <div style={containerStyle}>
                    <label style={labelStyle}>이메일</label>
                    <input type="text" placeholder="example@naver.com" style={inputStyle}/>
                </div>
                <button>비밀번호 찾기</button>
            </div>

        </div>
        );
};

export default InputForm;