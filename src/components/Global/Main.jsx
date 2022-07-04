import React from 'react';
import Styled from 'styled-components';

const Main = ({ child, loginStat }) => {
  return <StyledMain flag={loginStat}>{child}</StyledMain>;
};

export default Main;

const StyledMain = Styled.main`
  padding-top: ${(props) => (props.flag ? '30px' : '0')};
  height: ${(props) => (props.flag ? 'max-content' : '100%')};
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.flag ? 'space-around' : 'center')};
  align-items: center;
`;