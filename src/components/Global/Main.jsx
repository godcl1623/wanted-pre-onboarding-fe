import React from 'react';
import Styled from 'styled-components';

const Main = ({ child }) => {
  return (
    <StyledMain>
      { child }
    </StyledMain>
  );
}

export default Main;

const StyledMain = Styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;