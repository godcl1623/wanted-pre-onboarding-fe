import React from 'react';
import { UserCmts as EmptyUserCmts } from '../style/FeedsStyled';
import UserId from './UserId';

const UserCmts = () => {
  return (
    <EmptyUserCmts>
      <UserId />
      <p></p>
    </EmptyUserCmts>
  );
};

export default UserCmts;