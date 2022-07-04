import React from 'react';
import { Link } from 'react-router-dom';
import { BsPlusSquare } from 'react-icons/bs';
import { AiOutlineCompass, AiOutlineHeart, AiFillHome } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';
import * as GnbStyled from './style/GnbStyled';

const Gnb = ({ setLoginStat }) => {
  const logoutUser = event => {
    alert('로그아웃 되었습니다.');
    localStorage.removeItem('auth');
    setLoginStat(false);
  };

  function handleClick(event) {
    logoutUser(event);
  }

  return (
    <Nav id="global-nav">
      <section className="area_delimiter">
        <Link to="/">
          <img src="/assets/logo.png" alt="logo" />
        </Link>
      </section>
      <section className="area_delimiter">
        <Input type="text" id="search-input" placeholder="검색" />
      </section>
      <section className="area_delimiter">
        <Ul id="list-icons">
          <Link to="/" id="icon-home">
            <AiFillHome className="svg" />
          </Link>
          <Link to="/" id="icon-inbox">
            <FaRegPaperPlane className="svg" />
          </Link>
          <button id="icon-new_post">
            <BsPlusSquare className="svg" />
          </button>
          <Link to="/" id="icon-explore">
            <AiOutlineCompass className="svg" />
          </Link>
          <Link to="/" id="icon-activity">
            <AiOutlineHeart className="svg" />
          </Link>
          <button id="btn-logout" onClick={handleClick}>
            Logout
          </button>
        </Ul>
      </section>
    </Nav>
  );
};

export default Gnb;

const { Nav, Input, Ul } = GnbStyled;
