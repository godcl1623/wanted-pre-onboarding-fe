import React, { useState, useEffect } from 'react';
import FeedsHeading from './subComponents/FeedsHeading';
import PostImg from './subComponents/PostImg';
import IconsMenu from './subComponents/IconsMenu';
import UserPost from './subComponents/UserPost';
import UserCmts from './subComponents/UserCmts';
import CmtsInput from './subComponents/CmtsInput';
import * as FeedsStyled from './style/FeedsStyled';

const Feeds = ({ signedUser, feedData }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [prevCmt, setCmtTo] = useState([]);

  const addNewCmt = (newIpt) => {
    setCmtTo((prevCmt) => [...prevCmt, newIpt]);
  };

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = {
      author: signedUser.current.nickname,
      comment: event.target[0].value,
    };
    addNewCmt(newComment);
    event.target[0].value = '';
  }

  useEffect(() => {
    if (feedData) {
      const { postInfo } = feedData;
      const img = new Image();
      img.src = postInfo.picture;
      img.onload = function () {
        setIsImgLoaded(true);
      };
      return () => img.remove();
    }
  }, [feedData]);

  if (feedData && isImgLoaded) {
    const { author, postInfo, comments } = feedData;
    return (
      <Article className="container-feeds">
        <FeedsHeading author={author.nickname} />
        <PostImg src={postInfo.picture} />
        <IconsCnt
          className="container-activi
        ties-heading-feeds"
        >
          <IconsMenu />
          <LikesCnt className="container-likes_counter-heading-feeds">
            좋아요 {postInfo.likes}개
          </LikesCnt>
        </IconsCnt>
        <UserPost
          author={author.nickname}
          text={postInfo.text}
          dataArray={postInfo.tags}
        />
        <UserCmts dataArray={comments.concat(prevCmt)} />
        <CmtsInput handleSubmit={handleSubmit} />
      </Article>
    );
  } else {
    return (
      <Article className="container-feeds">
        <FeedsHeading author={''} />
        <PostImg src={'dummy'} />
        <IconsCnt
          className="container-activi
        ties-heading-feeds"
        >
          <IconsMenu />
          <LikesCnt className="container-likes_counter-heading-feeds">
            좋아요 {'0'}개
          </LikesCnt>
        </IconsCnt>
        <UserPost author={''} text={''} dataArray={[]} />
        <UserCmts dataArray={[]} />
        <CmtsInput handleSubmit={() => {}} />
      </Article>
    );
  }
};

export default Feeds;

const { Article, IconsCnt, LikesCnt } = FeedsStyled;
