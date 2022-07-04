import React from 'react';
import { TagsCnt } from '../../style/FeedsStyled';

const UserTags = ({ dataArray }) => {
  return dataArray.map((tag, idx) => {
    return (
      <TagsCnt className="tags" key={`tags_${idx}`}>
        # {tag}
      </TagsCnt>
    );
  });
};

export default UserTags;
