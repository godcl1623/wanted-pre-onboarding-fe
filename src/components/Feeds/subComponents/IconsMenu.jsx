import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { TbMessageCircle2, TbHeart, TbSend } from 'react-icons/tb';
import { IconsMenu as EmptyIcons, Button } from '../style/FeedsStyled';

const IconsMenu = () => {
  const leftIcons = [TbHeart, TbMessageCircle2, TbSend];
  return (
    <EmptyIcons>
      <section>
        {leftIcons.map((icon, idx) => {
          const IconComponent = icon;
          return (
            <Button key={`icon_${idx}`}>
              <IconComponent className="svg" />
            </Button>
          );
        })}
      </section>
      <Button>
        <FaRegBookmark className="svg" />
      </Button>
    </EmptyIcons>
  );
};

export default IconsMenu;
