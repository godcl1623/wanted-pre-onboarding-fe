import React from 'react';
import { UserId as EmptyUserId } from '../../style/FeedsStyled';

const UserId = ({ className, value }) => {
  return (
    <EmptyUserId className={className}>
      { value }
    </EmptyUserId>
  )
}

export default UserId;