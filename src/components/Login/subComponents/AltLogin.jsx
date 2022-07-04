import React from 'react';
import { LoginAltCnt, LoginFb } from '../style/LoginStyled';

const AltLogin = () => {
  return (
    <LoginAltCnt id="login-alt">
      <LoginFb id="login-fb">
        <img src="/assets/facebook.png" alt="facebook_logo" />
        <a href="https://www.facebook.com/">Facebook으로 로그인</a>
      </LoginFb>
      <a id="forgot_pwd" href="/">
        비밀번호를 잊으셨나요?
      </a>
    </LoginAltCnt>
  );
};

export default AltLogin;
