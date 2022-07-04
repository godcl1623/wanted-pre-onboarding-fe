import React, { useState, useRef, useEffect } from 'react';
import LoginForm from './subComponents/LoginForm';
import AltLogin from './subComponents/AltLogin';
import AppDown from './subComponents/AppDown';
import * as LoginStyles from './style/LoginStyled';
import * as LoginLogics from './logic/LoginLogic';

const Login = (props) => {
  const inputId = useRef();
  const inputPwd = useRef();
  const inputIdEle = useRef();
  const inputPwdEle = useRef();

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
    const validationTarget =
      event.target.name === 'user_id' ? inputId.current : inputPwd.current;
    if (validateInputVal(event.target.name, validationTarget) === false) {
      event.target.name === 'user_id' ? setIdValid(false) : setPwdValid(false);
    } else {
      event.target.name === 'user_id' ? setIdValid(true) : setPwdValid(true);
    }
  }

  function disableEnter(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      inputIdEle.current.blur();
      inputPwdEle.current.blur();
    }
  }

  const refs = { inputIdEle, inputPwdEle };
  const states = { isIdValid, isPwdValid, isValidationPassed };
  const handlers = { handleSubmit, handleChange, handleBlur };

  useEffect(() => {
    window.addEventListener('keydown', disableEnter);
    return () => window.removeEventListener('keydown', disableEnter);
  }, []);

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
        <LoginForm refs={refs} states={states} handlers={handlers} />
        <DivisionCnt id="cnt-div">
          <Hr />
          <Span>또는</Span>
        </DivisionCnt>
        <AltLogin />
      </LoginCnt>
      <RegisterCnt id="container-register">
        <p>계정이 없으신가요?</p>
        <a href="/">가입하기</a>
      </RegisterCnt>
      <AppDown />
    </Article>
  );
};

export default Login;

const { Article, LoginCnt, LogoCnt, DivisionCnt, RegisterCnt, Span, Hr } =
  LoginStyles;

const {
  decryptLSVal,
  signinUser,
  saveToLS,
  extractUserInfo,
  validateInputVal,
} = LoginLogics;
