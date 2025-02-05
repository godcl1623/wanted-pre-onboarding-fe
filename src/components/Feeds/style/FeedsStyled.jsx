import Styled from 'styled-components';

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

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const EmptyHeading = Styled.section`
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

export const ViewerActivityMenu = Styled.section`
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

  button:last-child {
    margin-right: 0;
  }
`;

export const EmptyIconsCnt = Styled.section`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

export const LikesCnt = Styled.section`
  padding: 0 6px;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  font-size: 14px;
  font-weight: bold;
`;

export const EmptyPost = Styled.section`
  padding: 5px 16px;
  background-color: var(--color-white);
  font-size: 14px;
`;

export const EmptyUserCmts = Styled(EmptyPost)`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;

  section {
    display: flex;
  }

  p {
    font-weight: normal;
  }
`;

export const EmptyInput = Styled(EmptyHeading)`
  border-top: 1px solid var(--color-border);
  border-radius: 0 0 15px 15px;

  .svg {
    margin-right: 15px;
    font-size: 2.5rem;
  }
`;

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

export const EmptyUserId = Styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

export const TagsCnt = Styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: purple;
  cursor: pointer;
`;

export const CmtsLikeIconWrapper = Styled.span`
  margin-left: auto;
`;

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

export const Input = Styled.input`
  height: 40px;
  font-size: 16px;
  font-weight: normal;
`;

export const Button = Styled.button`
  padding: 0;
  height: max-content;
  background-color: var(--color-white);
`;
