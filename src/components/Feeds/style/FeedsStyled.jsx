import Styled from 'styled-components';


/*
  # 스타일 기준
  1. 박스 계층(margin, border, padding)
  2. 콘텐츠 레이아웃 - 위치, 크기, 내부 배치 순 (position, width, height, display)
  3. 내부 스타일 (색상 등)
  4. 콘텐츠 (크기, 색상 순)
*/

// article
export const Article = Styled.article`
  margin-bottom: 20px;
  border: 1px solid var(--color-border);
  border-radius: 15px;
  width: 500px;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 0;
  .img_dummy {
    width: 100%;
    height: 500px;
    background-color: var(--color-border);
  }
`;
// section
export const FeedsHeading = Styled.section`
  border-radius: 15px 15px 0 0;
  padding: 10px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
`;
export const UserInfoCnt = Styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const IconsCnt = Styled.section`
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
export const IconsMenu = Styled.section`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
export const LikesCnt = Styled.section`
  padding: 0 6px;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  span {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const UserPost = Styled.section`
  padding: 5px 16px;
  background-color: var(--color-white);
`;
export const UserCmts = Styled(UserPost)`
  padding-bottom: 10px;
  display: flex;
  p {
    font-weight: normal;
  }
`;
export const CmtsInput = Styled(FeedsHeading)`
  border-top: 1px solid var(--color-border);
  border-radius: 0 0 15px 15px;
  .svg {
    margin-right: 15px;
    font-size: 2.5rem;
  }
`;
// div
export const ImgWrapper = Styled.div`
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
export const UserId = Styled.span`
  margin-right: 10px;
  font-weight: bold;
`;
export const Tags = Styled.span`
  margin-left: 5px;
  color: purple;
`;
export const CmtsLike = Styled.span`
  margin-left: auto;
`;
// form
export const Form = Styled.form`
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
export const Input = Styled.input`
  height: 40px;
  font-size: 16px;
  font-weight: normal;
`;
// button
export const Button = Styled.button`
  padding: 0;
  height: max-content;
  background-color: var(--color-white);
`;