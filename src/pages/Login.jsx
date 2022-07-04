import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/subComponents/LoginForm';
import AltLogin from '../components/Login/subComponents/AltLogin';
import AppDown from '../components/Login/subComponents/AppDown';
import * as LoginStyles from '../components/Login/style/LoginStyled';
import * as LoginLogics from '../components/Login/logic/LoginLogic';

const Login = (props) => {
  const inputIdVal = useRef();
  const inputPwdVal = useRef();
  const inputEleId = useRef();
  const inputElePwd = useRef();

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
      inputIdVal.current = event.currentTarget.value;
    } else if (event.target.name === 'password') {
      inputPwdVal.current = event.currentTarget.value;
    }
  }

  function handleBlur(event) {
    const validStandard = event.target.name === 'user_id';
    const validationTarget = validStandard ? inputIdVal.current : inputPwdVal.current;
    if (validateInputVal(event.target.name, validationTarget) === false) {
      validStandard ? setIdValid(false) : setPwdValid(false);
    } else {
      validStandard ? setIdValid(true) : setPwdValid(true);
    }
  }

  function disableEnter(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      inputEleId.current.blur();
      inputElePwd.current.blur();
    }
  }

  const refs = { inputEleId, inputElePwd };
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
        <Link to="/">가입하기</Link>
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
