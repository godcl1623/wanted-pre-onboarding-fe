import React, { useState, useRef, useEffect} from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineSmile } from 'react-icons/ai';
import { FaRegBookmark, FaUserCircle } from 'react-icons/fa';
import { TbMessageCircle2, TbHeart, TbSend, TbBookmark } from 'react-icons/tb';
import * as FeedsStyled from './style/FeedsStyled';

const Feeds = ({ signedUser, feedData }) => {
  useEffect(() => {
    console.log(feedData)
  }, [])
  return (
    <Article className="container-feeds">
      <FeedsHeading className="container-heading-feeds">
        <UserInfoCnt className="container-user_info-heading-feeds">
          <ImgWrapper className="img_wrapper">
            {/* <img src="" alt="user_icon" /> */}
            <div className="img_wrapper2"></div>
            <FaUserCircle fontSize="2rem" className="user_icon svg" />
          </ImgWrapper>
          <UserId className="user_id svg">user_id</UserId>
        </UserInfoCnt>
        <BiDotsHorizontalRounded fontSize="1.5rem" className="svg" />
      </FeedsHeading>
      <div className="img_dummy" />
      <IconsCnt className="container-activities-heading-feeds">
        <IconsMenu className="container-icons_menu-heading-feeds">
          <section className="container-icons-heading-feeds">
            <Button className="btn-like">
              <TbHeart className="svg" />
            </Button>
            <Button className="btn-cmt">
              <TbMessageCircle2 className="svg" />
            </Button>
            <Button className="btn-send">
              < TbSend className="svg" />
            </Button>
          </section>
          <FaRegBookmark className="svg" />
        </IconsMenu>
        <LikesCnt className="container-likes_counter-heading-feeds">
          <span className="likes_counter">
            좋아요 n개
          </span>
        </LikesCnt>
      </IconsCnt>
      <UserPost className="container-user_post-heading-feeds">
        <UserId className="user_id svg">user_id</UserId>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vivamus ac interdum elit, eu condimentum felis.
        Morbi scelerisque metus ut leo.
        <Tags className="tags">#tags</Tags>
      </UserPost>
      <UserCmts className="container-user_cmts_cnt-heading-feeds">
        <UserId className="friend_id">friend_id</UserId>
        <p className="user_comments">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <CmtsLike className="comments_like"><TbHeart className="svg"/></CmtsLike>
      </UserCmts>
      <CmtsInput className="container-user_cmts_input-heading-feeds">
        <Button>
          <AiOutlineSmile className="svg" />
        </Button>
        <Form className="form-comments">
          <Input type="text" name="input_cmts" placeholder="댓글 달기..." />
          <Input type="submit" name="smt_cmts" value="게시" />
        </Form>
      </CmtsInput>
    </Article>
  );
};

export default Feeds;

const {
  Article,
  FeedsHeading,
  UserInfoCnt,
  ImgWrapper,
  UserId,
  IconsCnt,
  IconsMenu,
  Button,
  LikesCnt,
  UserPost,
  Tags,
  UserCmts,
  CmtsLike,
  CmtsInput,
  Form,
  Input
} = FeedsStyled;