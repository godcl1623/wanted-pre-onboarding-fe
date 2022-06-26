import React from 'react';

const PostImg = ({ src }) => {
  let result = <img src={src} alt="user_posted_image" />;
  if (src === 'dummy') {
    result = <div className="img_dummy" />;
  }
  return result;
};

export default PostImg;
