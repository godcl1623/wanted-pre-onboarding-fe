import React from 'react';
import { TbHeart } from 'react-icons/tb';
import UserId from '../Common/UserId';
import { CmtsLike } from '../../style/FeedsStyled';

const ComponentLists = ({ dataArray }) => {
  return dataArray.map((comment, idx) => {
    return (
      <section key={`cmts_${idx}`}>
        <UserId value={comment.author} />
        <p>{comment.comment}</p>
        <CmtsLike>
          <TbHeart />
        </CmtsLike>
      </section>
    );
  });
};

export default ComponentLists;
