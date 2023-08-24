import React from 'react';

const AccountFindHeader = () => {

    const accountFindContainer = {
        marginLeft: '40px', 
        marginTop: '40px',
    }
    const accountFind = {
        color: '#000',
        textAlign: 'left',
        fontFamily: 'Istok Web',
        fontSize: '50px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        textTransform: 'capitalize',

    };

    const accountFindDetail = {
        color: '#575757',
        fontfamily: 'Istok Web',
        fontsize: '20px',
        fontstyle: 'normal',
        fontweight: '400',
        lineheight: 'normal',
        texttransform: 'capitalize',
        textAlign: 'left',
    }

    const linkStyle = {
        display: 'inline-block',
        marginRight: '20px',
        cursor: 'pointer',
    }

    return (
        <div style={accountFindContainer}>

        <div style={accountFind}>
            계정찾기
        </div>
        <div style={accountFindDetail}>
            계정정보를 잊으셨나요? 계정찾기 서비스를 통해 GoodBe를 이용할 수 있습니다.
        </div>
        <a href="#" style={linkStyle}>이메일 찾기</a>
        <a href="#" style={linkStyle}>비밀번호 찾기</a>
        </div>
    );
};

export default AccountFindHeader;