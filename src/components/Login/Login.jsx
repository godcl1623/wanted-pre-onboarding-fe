import React, { Fragment } from 'react';
import Styled from 'styled-components';

const Login = () => {
  return (
    <Article
      id="container-login-global"
      style={{
        width: '350px',
      }}
    >
      <LoginCnt
        id="container-login"
      >
        <LogoCnt
          id="container-logo"
        >
          <img src="/assets/logo.png" alt="logo" />
        </LogoCnt>
        <Form
          id="login-form"
        >
          <Input
            type="text"
            name="user_id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호"
            marginBottom="15px"
          />
          <InputBtn
            type="submit"
            name="login_btn"
            value="로그인"
          />
        </Form>
        <DivisionCnt id="cnt-div">
          <hr style={{ borderBottom: '1px solid var(--color-border)' }} />
          <Span
          >
            또는
          </Span>
        </DivisionCnt>
        <LoginAltCnt id="login-alt">
          <LoginFb id="login-fb">
            <img
              src="/assets/facebook.png"
              alt="facebook_logo"
            />
            <a>Facebook으로 로그인</a>
          </LoginFb>
            <a id="forgot_pwd">비밀번호를 잊으셨나요?</a>
        </LoginAltCnt>
      </LoginCnt>
      <RegisterCnt
        id="container-register"
      >
        <p>계정이 없으신가요?</p>
        <a>가입하기</a>
      </RegisterCnt>
      <DownCnt
        id="container-app-download"
      >
        <p>앱을 다운로드하세요.</p>
        <section id="container-store-logo">
          <img
            src="/assets/iosdown.png"
            alt="AppStore Download"
          />
          <img
            src="/assets/anddown.png"
            alt="GooglePlay Download"
          />
        </section>
      </DownCnt>
    </Article>
  );
};

export default Login;

/*
  # 스타일 기준
  1. 박스 계층(margin, border, padding)
  2. 콘텐츠 레이아웃 - 위치, 크기, 내부 배치 순 (position, width, height, display)
  3. 내부 스타일 (색상 등)
  4. 콘텐츠 (크기, 색상 순)
*/
// article
const Article = Styled.article`
  width: 350px;
`;
// section
const BasicSection = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginCnt = Styled(BasicSection)`
  margin-bottom: 10px;
  border: 1px solid var(--color-border);
  padding: 10px 50px;
  padding-bottom: 20px;
  height: max-content;
  justify-content: space-around;
  align-items: normal;
  background-color: var(--color-white);
`;
const LogoCnt = Styled(BasicSection)`
  margin-top: 40px;
  flex-direction: row;
  align-items: normal;
`;
const DivisionCnt = Styled.section`
  margin-top: 20px;
  position: relative;
`;
const LoginAltCnt = Styled(BasicSection)`
  height: max-content;
  justify-content: normal;
  a#forgot_pwd {
    font-size: 12px;
  }
`;
const LoginFb = Styled(BasicSection)`
  margin: 30px 0;
  flex-direction: row;
  align-items: normal;
  img {
    margin-right: 7px;
    height: 16px;
  }
`;
const RegisterCnt = Styled(LoginCnt)`
  height: 65px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  p {
    margin-right: 5px;
  }
  a {
    color: var(--color-highlight);
  }
`;
const DownCnt = Styled(BasicSection)`
  height: 100px;
  justify-content: space-around;
  img {
    height: 40px;
  }
  img:first-child {
    margin-right: 10px;
  }
`;
// form
const Form = Styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;
// input
const Input = Styled.input`
  margin-bottom: ${props => props.marginBottom || '7px'};
  border: 1px solid var(--color-border);
  border-radius: 3px;
  padding: 10px;
  height: 40px;
  background-color: var(--color-bg);
`;
const InputBtn = Styled.input`
  border-radius: 3px;
  height: 30px;
  background-color: var(--color-highlight);
  color: var(--color-white);
`;
// span
const Span = Styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  background-color: var(--color-white);
  text-align: center;
  font-size: 14px;
  color: var(--color-font);
`;