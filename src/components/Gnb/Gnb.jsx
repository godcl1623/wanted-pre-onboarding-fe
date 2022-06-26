import React from 'react';
import { BsSearch, BsPlusSquare } from 'react-icons/bs';
import { AiOutlineCompass, AiOutlineHeart, AiFillHome } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';
import * as GnbStyled from './style/GnbStyled';

const Gnb = ({ setLoginStat }) => {
  function handleClick(event) {
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('auth');
    setLoginStat(false);
  }

  return (
    <Nav
      id="global-nav"
    >
      <section className="area_delimiter">
        <img src="/assets/logo.png" alt="logo" />
      </section>
      <section className="area_delimiter">
        <Input type="text" id="search-input" placeholder="검색" />
      </section>
      <section className="area_delimiter">
        <Ul id="list-icons">
          <a id="icon-home">
            <AiFillHome className="svg" />
          </a>
          <a id="icon-inbox">
            <FaRegPaperPlane className="svg" />
          </a>
          <button id="icon-new_post">
            <BsPlusSquare className="svg" />
          </button>
          <a id="icon-explore">
            <AiOutlineCompass className="svg" />
          </a>
          <a id="icon-activity">
            <AiOutlineHeart className="svg"  />
          </a>
          <button
            id="btn-logout"
            onClick={handleClick}
          >
            Logout
          </button>
        </Ul>
      </section>
    </Nav>
  );
};

export default Gnb;

const {
  Nav,
  Section,
  Form,
  Input,
  Ul
} = GnbStyled;