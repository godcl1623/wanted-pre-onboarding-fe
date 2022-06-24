import React from 'react';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineSmile, AiOutlineHeart } from 'react-icons/ai';
import { FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';
import { TbMessageCircle2 } from 'react-icons/tb';

const Feeds = () => {
  return (
    <article className="container-feeds">
      <section className="container-heading-feeds">
        <section className="container-user_info-heading-feeds">
          <section className="container-icon-heading-feeds">
            <div>
              <img src="" alt="user_icon" />
            </div>
          </section>
          { /* 컴포넌트화 */}
          <section className="container-user_id-heading-feeds">
            <span className="user_id">user_id</span>
          </section>
        </section>
        <section className="container-more_menu-heading-feeds">
          <BiDotsHorizontalRounded fontSize="1.5rem" />
        </section>
      </section>
      <section className="container-user_pic-heading-feeds">
        <img src="" alt="user_pic" />
      </section>
      <section className="container-user_post-heading-feeds">
        <section className="container-icons-heading-feeds">
          <section className="container-icons_menu-heading-feeds">
            <button className="btn-like">
              <AiOutlineHeart />
            </button>
            <button className="btn-cmt">
              <TbMessageCircle2 />
            </button>
            <button className="btn-send">
              <FaRegPaperPlane />
            </button>
          </section>
          <section className="container-icon_save-heading-feeds">
            <FaRegBookmark />
          </section>
        </section>
        <section className="container-likes_counter-heading-feeds">
          좋아요 n개
        </section>
        <section className="container-user_post-heading-feeds">
          <span className="user_id">user_id</span>
          <p className="user_posts">posts</p>
          <span className="tags">#tags</span>
        </section>
        <section className="container-user_cmts_cnt-heading-feeds">
          <section className="container-user_cmts-heading-feeds">
            <span className="friend_id">friend_id</span>
            <p className="user_comments">comments</p>
            <span className="comments_like"><AiOutlineHeart /></span>
          </section>
        </section>
      </section>
      <section className="container-user_cmts_input-heading-feeds">
        <section className="container-emoticons-heading-feeds">
          <button>
            <AiOutlineSmile />
          </button>
        </section>
        <section className="container-form_cmts-heading-feeds">
          <form className="form-comments">
            <input type="text" name="input_cmts" placeholder="댓글 달기..." />
            <input type="submit" name="smt_cmts" value="게시" />
          </form>
        </section>
      </section>
    </article>
  );
};

export default Feeds;