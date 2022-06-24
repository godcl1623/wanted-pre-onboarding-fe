import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    --color-bg: #FAFAFA;
    --color-border: #DBDBDB;
    --color-white: #FFFFFF;
    --color-font: #8E8E9D;
  }
  * {
    box-sizing:border-box;
    outline:none;
    border:none;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    background-color: var(--color-bg);
  }
`;

export default GlobalStyles;
