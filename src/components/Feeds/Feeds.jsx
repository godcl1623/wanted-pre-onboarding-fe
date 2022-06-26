import React, { useState, useRef, useEffect} from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineSmile } from 'react-icons/ai';
import { FaRegBookmark, FaUserCircle } from 'react-icons/fa';
import { TbMessageCircle2, TbHeart, TbSend, TbBookmark } from 'react-icons/tb';
import * as FeedsStyled from './style/FeedsStyled';
import UserId from './subComponents/UserId';
import UserTags from './subComponents/UserTags';

const Feeds = ({ signedUser, feedData }) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [newCmt, setNewCmt] = useState([]);
  const addNewCmt = newIpt => {
    setNewCmt(newCmt => [...newCmt, newIpt]);
  };
  useEffect(() => {
    if (feedData) {
      const img = new Image();
      img.src = feedData.postInfo.picture;
      img.onload = function() {
        setIsImgLoaded(true);
      }
    }
  }, [feedData]);
  if (feedData && isImgLoaded) {
    return (
      <Article className="container-feeds">
        <FeedsHeading className="container-heading-feeds">
          <UserInfoCnt className="container-user_info-heading-feeds">
            <ImgWrapper className="img_wrapper">
              {/* <img src="" alt="user_icon" /> */}
              <div className="img_wrapper2"></div>
              <FaUserCircle fontSize="2rem" className="user_icon svg" />
            </ImgWrapper>
            <UserId className="user_id svg" value={feedData.author.nickname} />
          </UserInfoCnt>
          <BiDotsHorizontalRounded fontSize="1.5rem" className="svg" />
        </FeedsHeading>
        {/* <div className="img_dummy" /> */}
        <img
          src={feedData.postInfo.picture}
          alt="user_posted_image"
        />
        <IconsCnt className="container-activi
        ties-heading-feeds">
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
              좋아요 { feedData.postInfo.likes }개
            </span>
          </LikesCnt>
        </IconsCnt>
        <UserPost className="container-user_post-heading-feeds">
          <UserId className="user_id svg" value={feedData.author.nickname} />
          { feedData.postInfo.text }
          <UserTags dataArray={feedData.postInfo.tags} />
        </UserPost>
        <UserCmts className="container-user_cmts_cnt-heading-feeds">
          {
            feedData.comments.concat(newCmt).map((comment, idx) => {
              return (
                <section key={`cmts_${idx}`}>
                  <UserId className="friend_id" value={comment.author} />
                  <p className="user_comments">{ comment.comment }</p>
                  <CmtsLike className="comments_like"><TbHeart className="svg"/></CmtsLike>
                </section>
              );
            })
          }
        </UserCmts>
        <CmtsInput className="container-user_cmts_input-heading-feeds">
          <Button>
            <AiOutlineSmile className="svg" />
          </Button>
          <Form
            className="form-comments"
            onSubmit={e => {
              e.preventDefault();
              const newComment = {
                author: signedUser.current.nickname,
                comment: e.target[0].value
              }
              addNewCmt(newComment);
              e.target[0].value = '';
            }}
          >
            <Input type="text" name="input_cmts" placeholder="댓글 달기..." />
            <Input type="submit" name="smt_cmts" value="게시" />
          </Form>
        </CmtsInput>
      </Article>
    );
  } else {
    return (<h1>Loading...</h1>)
  }
};

export default Feeds;

const {
  Article,
  FeedsHeading,
  UserInfoCnt,
  ImgWrapper,
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