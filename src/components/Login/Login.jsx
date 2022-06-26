import React, { useState, useRef, useEffect } from 'react';
import * as LoginStyles from './style/LoginStyled';
import * as LoginLogics from './logic/LoginLogic';

const Login = props => {
  const inputId = useRef();
  const inputPwd = useRef();

  const [isIdValid, setIdValid] = useState();
  const [isPwdValid, setPwdValid] = useState();
  const [isValidationPassed, setValidationStat] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const userInfo = extractUserInfo(event);
    saveToLS(userInfo);
    signinUser(userInfo, props);
  }

  function handleChange(event) {
    if (event.target.name === 'user_id') {
      inputId.current = event.currentTarget.value;
    } else if (event.target.name === 'password') {
      inputPwd.current = event.currentTarget.value;
    }
  }

  function handleBlur(event) {
    const validationTarget = event.target.name === 'user_id' ? inputId.current : inputPwd.current;
    if (validateInputVal(event.target.name, validationTarget) === false) {
      event.target.name === 'user_id' ? setIdValid(false) : setPwdValid(false);
    } else {
      event.target.name === 'user_id' ? setIdValid(true) : setPwdValid(true);
    }
  }

  useEffect(() => {
    const savedUserInfo = JSON.parse(decryptLSVal());
    if (savedUserInfo) {
      signinUser(savedUserInfo, props);
    }
  }, []);

  useEffect(() => {
    if (isIdValid != null && isPwdValid != null) {
      if (isIdValid && isPwdValid) {
        setValidationStat(true);
      }
    }
  }, [isIdValid, isPwdValid]);

  return (
    <Article id="container-login-global">
      <LoginCnt id="container-login">
        <LogoCnt id="container-logo">
          <img src="/assets/logo.png" alt="logo" />
        </LogoCnt>
        <Form
          id="login-form"
          onSubmit={handleSubmit}
        >
          <Input
            className={ isIdValid === false ? 'invalid' : '' }
            type="text"
            name="user_id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            className={ isPwdValid === false ? 'invalid' : '' }
            type="password"
            name="password"
            placeholder="비밀번호"
            marginBottom="15px"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <InputBtn
            className={ isValidationPassed ? '' : 'disabled' }
            type="submit"
            name="login_btn"
            value="로그인"
          />
        </Form>
        <DivisionCnt id="cnt-div">
          <Hr />
          <Span>또는</Span>
        </DivisionCnt>
        <LoginAltCnt id="login-alt">
          <LoginFb id="login-fb">
            <img src="/assets/facebook.png" alt="facebook_logo" />
            <a href="https://www.facebook.com/">Facebook으로 로그인</a>
          </LoginFb>
          <a id="forgot_pwd" href="/">
            비밀번호를 잊으셨나요?
          </a>
        </LoginAltCnt>
      </LoginCnt>
      <RegisterCnt id="container-register">
        <p>계정이 없으신가요?</p>
        <a href="/">가입하기</a>
      </RegisterCnt>
      <DownCnt id="container-app-download">
        <p>앱을 다운로드하세요.</p>
        <section id="container-store-logo">
          <a href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&ct=igweb.loginPage.badge&mt=8&vt=lo">
            <img src="/assets/iosdown.png" alt="AppStore Download" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D6BD5DA95-C684-4FA9-A602-C5BB5EC42CD2%26utm_content%3Dlo%26utm_medium%3Dbadge">
            <img src="/assets/anddown.png" alt="GooglePlay Download" />
          </a>
        </section>
      </DownCnt>
    </Article>
  );
};

export default Login;

const {
  Article,
  LoginCnt,
  LogoCnt,
  DivisionCnt,
  LoginAltCnt,
  LoginFb,
  RegisterCnt,
  DownCnt,
  Form,
  Input,
  InputBtn,
  Span,
  Hr
} = LoginStyles;

const {
  decryptLSVal,
  signinUser,
  saveToLS,
  extractUserInfo,
  validateInputVal
} = LoginLogics;