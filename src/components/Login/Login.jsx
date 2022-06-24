import React, { Fragment } from 'react';
import Styled from 'styled-components';

const Login = () => {
  return (
    <article id="container-login-global" style={{width: '470px', height: '100%', border: '1px solid var(--color-border)', margin: '0 auto', backgroundColor: 'var(--color-white'}}>
      <section id="container-login">
        <section id="container-logo">
          <img src="/assets/logo.png" alt="logo" />
        </section>
        <form id="login-form">
          <input type="text" name="user_id" placeholder='전화번호, 사용자 이름 또는 이메일'/>
          <input type="password" name="password" placeholder="비밀번호" />
          <input type="submit" name="login_btn" value="로그인" />
        </form>
        <section id="cnt-div">
          <hr style={{borderBottom: '1px solid var(--color-border)'}} />
          <p style={{color: 'var(--color-font)'}}>또는</p>
        </section>
        <section id="login-alt">
          <section id="login-fb">
            <img src="/assets/facebook.png" alt="facebook_logo" />
            <a>Facebook으로 로그인</a>
          </section>
          <section id="forgot-pwd">
            <a>비밀번호를 잊으셨나요?</a>
          </section>
        </section>
      </section>
      <section id="container-register">
        <p>계정이 없으신가요?</p>
        <a>가입하기</a>
      </section>
      <section id="container-app-download">
        <p>앱을 다운로드하세요.</p>
        <section id="container-store-logo">
          <img src="/assets/iosdown.png" alt="AppStore Download" />
          <img src="/assets/anddown.png" alt="GooglePlay Download" />
        </section>
      </section>
    </article>
  );
};

export default Login;