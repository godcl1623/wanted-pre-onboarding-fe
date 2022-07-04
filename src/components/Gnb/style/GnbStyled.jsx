import Styled from 'styled-components';

export const Nav = Styled.nav`
  border-bottom: 1px solid var(--color-border);
  padding: 0 20px;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  z-index: 10;

  img {
    height: 30px;
  }

  .area_delimiter {
    width: 100%;
    display: flex;
  }

  .area_delimiter:nth-child(2) {
    justify-content: center;
  }

  .area_delimiter:last-child {
    justify-content: flex-end;
  }

  @media (max-width: 600px) {
    padding: 0 10px;
    input {
      display: none;
    }
  }
`;

export const Input = Styled.input`
  margin-left: 10px;
  border-radius: 10px;
  padding: 5px 25px;
  width: 100%;
  max-width: 270px;
  min-width: 150px;
  height: 35px;
  background-color: var(--color-bg2);
  font-size: 16px;
  font-weight: normal;
`;

export const Ul = Styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  .svg {
    fill: var(--color-black);
    font-size: 1.5rem;
  }
  a, button {
    margin-right: 15px;
  }
  button#icon-new_post {
    background-color: var(--color-white);
  }
  button:last-child {
    margin-right: 0;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: tomato;
    font-weight: bold;
    color: var(--color-white);
  }
  @media (max-width: 600px) {
    a, button {
      margin-right: 5px;
    }
    button:last-child {
      padding: 5px 10px;
    }
  }
`;
