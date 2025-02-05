import React from 'react';
import { EmptyUserCmts } from '../style/FeedsStyled';
import Comment from './UserCmts/Comment';

const UserCmts = ({ dataArray, className }) => {
  return (
    <EmptyUserCmts className={className}>
      <Comment dataArray={dataArray} />
    </EmptyUserCmts>
  );
};

export default UserCmts;
