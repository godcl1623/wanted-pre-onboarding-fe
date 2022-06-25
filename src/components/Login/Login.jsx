import React, { Fragment } from 'react';
import Styled from 'styled-components';

const Login = () => {
  return (
    <article
      id="container-login-global"
      style={{
        width: '350px',
      }}
    >
      <section
        id="container-login"
        style={{
          height: 'max-content',
          padding: '10px 50px',
          paddingBottom: '20px',
          border: '1px solid var(--color-border)',
          marginBottom: '10px',
          backgroundColor: 'var(--color-white)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
      >
        <section
          id="container-logo"
          style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img src="/assets/logo.png" alt="logo" />
        </section>
        <form
          id="login-form"
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <input
            type="text"
            name="user_id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            style={{
              marginBottom: '7px',
              padding: '10px',
              border: '1px solid var(--color-border)',
              borderRadius: '3px',
              backgroundColor: 'var(--color-bg)',
              height: '40px',
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            style={{
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid var(--color-border)',
              borderRadius: '3px',
              backgroundColor: 'var(--color-bg)',
              height: '40px',
            }}
          />
          <input
            type="submit"
            name="login_btn"
            value="로그인"
            style={{
              borderRadius: '3px',
              backgroundColor: 'var(--color-highlight)',
              color: 'white',
              height: '30px',
            }}
          />
        </form>
        <section id="cnt-div" style={{ margin: '20px 0', position: 'relative' }}>
          <hr style={{ borderBottom: '1px solid var(--color-border)' }} />
          <p
            style={{
              color: 'var(--color-font)',
              position: 'absolute',
              top: '0',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--color-white)',
              width: '50px',
              textAlign: 'center',
            }}
          >
            또는
          </p>
        </section>
        <section id="login-alt" style={{
          height: 'max-content',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <section id="login-fb" style={{
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <img
              src="/assets/facebook.png"
              alt="facebook_logo"
              style={{ marginRight: '7px', height: '16px' }}
            />
            <a>Facebook으로 로그인</a>
          </section>
            <a>비밀번호를 잊으셨나요?</a>
        </section>
      </section>
      <section
        id="container-register"
        style={{
          height: '65px',
          border: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-white)',
          marginBottom: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p style={{ marginRight: '5px' }}>계정이 없으신가요?</p>
        <a>가입하기</a>
      </section>
      <section
        id="container-app-download"
        style={{
          height: '100px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <p>앱을 다운로드하세요.</p>
        <section id="container-store-logo">
          <img
            src="/assets/iosdown.png"
            alt="AppStore Download"
            style={{ marginRight: '10px', height: '40px' }}
          />
          <img
            src="/assets/anddown.png"
            alt="GooglePlay Download"
            style={{ height: '40px' }}
          />
        </section>
      </section>
    </article>
  );
};

export default Login;
