import React from 'react';
import { Tags } from '../../style/FeedsStyled';

const UserTags = ({ dataArray }) => {
  return dataArray.map((tag, idx) => {
    return (
      <Tags className="tags" key={`tags_${idx}`}>
        # { tag }
      </Tags>
    );
  })
};

export default UserTags;