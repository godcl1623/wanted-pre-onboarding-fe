import React from 'react';
import { UserPost as EmptyPost } from '../style/FeedsStyled';
import UserId from './Common/UserId';
import UserTags from './UserPost/UserTags';

const UserPost = ({ author, text, dataArray }) => {
  return (
    <EmptyPost>
      <UserId className="user_id svg" value={author} />
      {text}
      <UserTags dataArray={dataArray} />
    </EmptyPost>
  );
};

export default UserPost;
