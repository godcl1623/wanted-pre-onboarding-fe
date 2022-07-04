import React from 'react';
import { TbHeart } from 'react-icons/tb';
import UserId from '../Common/UserId';
import { CmtsLikeIconWrapper } from '../../style/FeedsStyled';

const ComponentLists = ({ dataArray }) => {
  return dataArray.map((cmt, idx) => {
    const { author, comment } = cmt;
    return (
      <section key={`cmts_${idx}`}>
        <UserId value={author} />
        <p>{comment}</p>
        <CmtsLikeIconWrapper>
          <TbHeart />
        </CmtsLikeIconWrapper>
      </section>
    );
  });
};

export default ComponentLists;
