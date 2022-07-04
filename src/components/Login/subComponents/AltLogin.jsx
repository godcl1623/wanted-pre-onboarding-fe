import React from 'react';
import { Link } from 'react-router-dom';
import { LoginAltCnt, LoginFb } from '../style/LoginStyled';

const AltLogin = () => {
  return (
    <LoginAltCnt id="login-alt">
      <LoginFb id="login-fb">
        <img src="/assets/facebook.png" alt="facebook_logo" />
        <Link to="https://www.facebook.com/">Facebook으로 로그인</Link>
      </LoginFb>
      <Link id="forgot_pwd" to="/">
        비밀번호를 잊으셨나요?
      </Link>
    </LoginAltCnt>
  );
};

export default AltLogin;
