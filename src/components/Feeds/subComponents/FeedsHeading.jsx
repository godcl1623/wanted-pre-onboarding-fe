import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import UserId from './Common/UserId';
import { FeedsHeading as EmptyHeading, UserInfoCnt, ImgWrapper } from '../style/FeedsStyled';

const FeedsHeading = ({ author }) => {
  return (
    <EmptyHeading>
      <UserInfoCnt>
        <ImgWrapper>
          <div className="img_wrapper2"></div>
          <FaUserCircle fontSize="2rem" className="user_icon svg" />
        </ImgWrapper>
        <UserId className="user_id svg" value={author} />
      </UserInfoCnt>
      <BiDotsHorizontalRounded fontSize="1.5rem" className="svg" />
    </EmptyHeading>
  );
};

export default FeedsHeading;