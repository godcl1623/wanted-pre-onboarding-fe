import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --color-bg: #FAFAFA;
    --color-bg2: #EFEFEF;
    --color-border: #DBDBDB;
    --color-white: #FFFFFF;
    --color-black: #262626;
    --color-font: #8E8E9D;
    --color-font2: #8e8e8e;
    --color-highlight: #0095F6;
  }
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  html, body, #root, main {
    width: 100%;
    height: 100%;
    background-color: var(--color-bg);
  }
  p, a, input {
    font-size: 14px;
    font-weight: bold;
  }
  a {
    color: purple;
    text-decoration: none;
    cursor: pointer;
  }
  input {
    font-size: 12px;
  }
  input:focus {
    border-color: var(--color-highlight);
  }
  button, input[type="submit"], .svg {
    cursor: pointer;
  }
  .disabled {
    filter: opacity(0.3);
    pointer-events: none;
  }
  .invalid {
    border: 2px solid red;
  }
`;

export default GlobalStyles;
