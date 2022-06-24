import React from 'react';
import { BsSearch, BsPlusSquare } from 'react-icons/bs';
import { AiOutlineCompass, AiOutlineHeart, AiFillHome } from 'react-icons/ai';
import { FaRegPaperPlane } from 'react-icons/fa';

const Gnb = () => {
  return (
    <nav id="global-nav" style={{width: '100%', height: '60px', borderBottom: '1px solid var(--color-border)'}} >
      <section id="container-nav-contents">
        <section id="container-logo-gnb">
          <img src="/assets/logo.png" alt="logo" />
        </section>
        <section id="container-search-gnb">
          <form id="search-form">
            <BsSearch fill="var(--color-font2)" />
            <input type="text" id="search-input" placeholder="검색" />
          </form>
        </section>
        <section id="container-icons-gnb">
          <ul id="list-icons">
            <a id="icon-home">
              <AiFillHome fill="var(--color-font2)" fontSize="1.5rem" />
            </a>
            <a id="icon-inbox">
              <FaRegPaperPlane fill="var(--color-font2)" fontSize="1.5rem" />
            </a>
            <button id="icon-new_post">
              <BsPlusSquare fill="var(--color-font2)" fontSize="1.5rem" />
            </button>
            <a id="icon-explore">
              <AiOutlineCompass fill="var(--color-font2)" fontSize="1.5rem" />
            </a>
            <a id="icon-activity">
              <AiOutlineHeart fill="var(--color-font2)" fontSize="1.5rem" />
            </a>
            <button id="btn-logout">Logout</button>
          </ul>
        </section>
      </section>
    </nav>
  );
};

export default Gnb;