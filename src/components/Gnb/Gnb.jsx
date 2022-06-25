import React from 'react';
import Styled from 'styled-components';
import { BsSearch, BsPlusSquare } from 'react-icons/bs';
import { AiOutlineCompass, AiOutlineHeart, AiFillHome } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';

const Gnb = () => {
  return (
    <Nav
      id="global-nav"
    >
      <Section
        id="container-nav-contents"
      >
        <img src="/assets/logo.png" alt="logo" />
        <Form
          id="search-form"
        >
          <BsSearch fill="var(--color-font2)" />
          <Input type="text" id="search-input" placeholder="검색" />
        </Form>
        <Ul id="list-icons">
          <a id="icon-home">
            <AiFillHome fill="var(--color-black)" fontSize="1.5rem" />
          </a>
          <a id="icon-inbox">
            <FaRegPaperPlane fill="var(--color-black)" fontSize="1.5rem" />
          </a>
          <button id="icon-new_post" style={{ backgroundColor: 'var(--color-white)' }}>
            <BsPlusSquare fill="var(--color-black)" fontSize="1.5rem" />
          </button>
          <a id="icon-explore">
            <AiOutlineCompass fill="var(--color-black)" fontSize="1.5rem" />
          </a>
          <a id="icon-activity">
            <AiOutlineHeart fill="var(--color-black)" fontSize="1.5rem" />
          </a>
          <button id="btn-logout">Logout</button>
        </Ul>
      </Section>
    </Nav>
  );
};

export default Gnb;

/*
  # 스타일 기준
  1. 박스 계층(margin, border, padding)
  2. 콘텐츠 레이아웃 - 위치, 크기, 내부 배치 순 (position, width, height, display)
  3. 내부 스타일 (색상 등)
  4. 콘텐츠 (크기, 색상 순)
*/

// nav
const Nav = Styled.nav`
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
`;
// section
const Section = Styled.section`
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 30px;
  }
`;
// form
const Form = Styled.form`
  border-radius: 5px;
  padding: 5px 15px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg2);
`;
// input
const Input = Styled.input`
  margin-left: 10px;
  height: 30px;
  background-color: var(--color-bg2);
  font-size: 16px;
  font-weight: normal;
`;
// ul
const Ul = Styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin-right: 15px;
  }
  button {
    margin-right: 15px;
  }
  button:last-child {
    margin-right: 0;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: tomato;
    font-weight: bold;
    color: var(--color-white);
  }
`;