import React from 'react';
import { EmptyPost } from '../style/FeedsStyled';
import UserId from './Common/UserId';
import UserTags from './UserPost/UserTags';

const UserPost = (props) => {
  const { author, text, dataArray } = props;

  return (
    <EmptyPost>
      <UserId className="user_id svg" value={author} />
      {text}
      <UserTags dataArray={dataArray} />
    </EmptyPost>
  );
};

export default UserPost;
