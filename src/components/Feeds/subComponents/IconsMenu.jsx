import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { TbMessageCircle2, TbHeart, TbSend } from 'react-icons/tb';
import { EmptyIconsCnt, Button } from '../style/FeedsStyled';

const IconsMenu = () => {
  const leftIcons = [TbHeart, TbMessageCircle2, TbSend];
  return (
    <EmptyIconsCnt>
      <section>
        {leftIcons.map((icon, idx) => {
          const IconAsComponent = icon;
          return (
            <Button key={`icon_${idx}`}>
              <IconAsComponent className="svg" />
            </Button>
          );
        })}
      </section>
      <Button>
        <FaRegBookmark className="svg" />
      </Button>
    </EmptyIconsCnt>
  );
};

export default IconsMenu;
