import React from 'react';
import Styled from 'styled-components';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineSmile } from 'react-icons/ai';
import { FaRegBookmark, FaUserCircle } from 'react-icons/fa';
import { TbMessageCircle2, TbHeart, TbSend, TbBookmark } from 'react-icons/tb';

const Feeds = () => {
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

/*
  # 스타일 기준
  1. 박스 계층(margin, border, padding)
  2. 콘텐츠 레이아웃 - 위치, 크기, 내부 배치 순 (position, width, height, display)
  3. 내부 스타일 (색상 등)
  4. 콘텐츠 (크기, 색상 순)
*/

// article
const Article = Styled.article`
  border: 1px solid var(--color-border);
  border-radius: 15px;
  width: 500px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .img_dummy {
    width: 100%;
    height: 500px;
    background-color: var(--color-border);
  }
`;
// section
const FeedsHeading = Styled.section`
  border-radius: 15px 15px 0 0;
  padding: 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
`;
const UserInfoCnt = Styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconsCnt = Styled.section`
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  .svg {
    font-size: 1.5625rem;
  }
  button {
    margin-right: 15px;
  }
`;
const IconsMenu = Styled.section`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
const LikesCnt = Styled.section`
  padding: 0 6px;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;
const UserPost = Styled.section`
  padding: 5px 16px;
  background-color: var(--color-white);
`;
const UserCmts = Styled(UserPost)`
  padding-bottom: 10px;
  display: flex;
  p {
    font-weight: normal;
  }
`;
const CmtsInput = Styled(FeedsHeading)`
  border-top: 1px solid var(--color-border);
  border-radius: 0 0 15px 15px;
  .svg {
    margin-right: 15px;
    font-size: 2.5rem;
  }
`;
// div
const ImgWrapper = Styled.div`
  margin-right: 10px;
  border-radius: 50%;
  padding: 1px;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(244,241,2);
  background: linear-gradient(90deg, rgba(244,241,2,1) 0%, rgba(253,29,29,1) 50%, rgba(241,69,252,1) 100%);
  div {
    border-radius: 50%;
    position: absolute;
    width: 35px;
    height: 35px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-white);
    z-index: 0;
  }
  .user_icon {
    z-index: 1;
  }
`;
// span
const UserId = Styled.span`
  margin-right: 10px;
  font-weight: bold;
`;
const Tags = Styled.span`
  margin-left: 5px;
  color: purple;
`;
const CmtsLike = Styled.span`
  margin-left: auto;
`;
// form
const Form = Styled.form`
  width: 100%;
  input[name='input_cmts'] {
    width: calc(100% - 50px);
  }
  input[name='smt_cmts'] {
    width: 50px;
    background-color: var(--color-white);
    color: var(--color-highlight);
  }
`;
// input
const Input = Styled.input`
  height: 40px;
  font-size: 16px;
  font-weight: normal;
`;
// button
const Button = Styled.button`
  padding: 0;
  height: max-content;
  background-color: var(--color-white);
`;