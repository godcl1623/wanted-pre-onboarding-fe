import React, { useState, useEffect } from 'react';
import EmptyFeeds from './subComponents/EmptyFeeds';

const Feeds = ({ signedUser, feedData }) => {
  const { author, postInfo, comments } = feedData ? feedData : {};
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [prevCmt, setCmtTo] = useState([]);

  const addNewCmt = (newIpt) => {
    setCmtTo((prevCmt) => [...prevCmt, newIpt]);
  };

  const clearInput = (event) => {
    event.target[0].value = '';
  };

  const makeNewCmt = (event) => {
    return {
      author: signedUser.current.nickname,
      comment: event.target[0].value,
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newComment = makeNewCmt(event);
    addNewCmt(newComment);
    clearInput(event);
  }

  useEffect(() => {
    if (feedData) {
      const img = new Image();
      img.src = postInfo.picture;
      img.onload = function () {
        setIsImgLoaded(true);
      };
      return () => img.remove();
    }
  }, [feedData]);

  return (
    <EmptyFeeds
      nickname={isImgLoaded ? author.nickname : ''}
      src={isImgLoaded ? postInfo.picture : 'dummy'}
      likes={isImgLoaded ? postInfo.likes : ''}
      text={isImgLoaded ? postInfo.text : ''}
      tags={isImgLoaded ? postInfo.tags : []}
      cmtList={isImgLoaded ? comments.concat(prevCmt) : []}
      handleSubmit={isImgLoaded ? handleSubmit : () => {}}
    />
  );
};

export default Feeds;
