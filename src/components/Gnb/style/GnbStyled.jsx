import Styled from 'styled-components';

/*
  # 스타일 기준
  1. 박스 계층(margin, border, padding)
  2. 콘텐츠 레이아웃 - 위치, 크기, 내부 배치 순 (position, width, height, display)
  3. 내부 스타일 (색상 등)
  4. 콘텐츠 (크기, 색상 순)
*/

// nav
export const Nav = Styled.nav`
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
`;
// section
export const Section = Styled.section`
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
export const Form = Styled.form`
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
  .svg {
    fill: var(--color-font2);
  }
`;
// input
export const Input = Styled.input`
  margin-left: 10px;
  height: 30px;
  background-color: var(--color-bg2);
  font-size: 16px;
  font-weight: normal;
`;
// ul
export const Ul = Styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  .svg {
    fill: var(--color-black);
    font-size: 1.5rem;
  }
  a {
    margin-right: 15px;
  }
  button {
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
`;