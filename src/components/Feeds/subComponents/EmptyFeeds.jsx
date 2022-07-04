import React from 'react';
import FeedsHeading from './FeedsHeading';
import PostImg from './PostImg';
import IconsMenu from './IconsMenu';
import UserPost from './UserPost';
import UserCmts from './UserCmts';
import CmtsInput from './CmtsInput';
import * as FeedsStyled from '../style/FeedsStyled';

const EmptyFeeds = (props) => {
  const { nickname, src, likes, text, tags, cmtList, handleSubmit } = props;

  return (
    <Article className="container-feeds">
      <FeedsHeading author={nickname} />
      <PostImg src={src} />
      <ViewerActivityMenu
        className="container-activi
      ties-heading-feeds"
      >
        <IconsMenu />
        <LikesCnt className="container-likes_counter-heading-feeds">
          좋아요 {likes}개
        </LikesCnt>
      </ViewerActivityMenu>
      <UserPost author={nickname} text={text} dataArray={tags} />
      <UserCmts dataArray={cmtList} />
      <CmtsInput handleSubmit={handleSubmit} />
    </Article>
  );
};

export default EmptyFeeds;

const { Article, ViewerActivityMenu, LikesCnt } = FeedsStyled;
