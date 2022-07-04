import Styled from 'styled-components';

export const Article = Styled.article`
  width: 350px;
`;

export const BasicSection = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginCnt = Styled(BasicSection)`
  margin-bottom: 10px;
  border: 1px solid var(--color-border);
  padding: 10px 50px;
  padding-bottom: 20px;
  height: max-content;
  justify-content: space-around;
  align-items: normal;
  background-color: var(--color-white);
`;

export const LogoCnt = Styled(BasicSection)`
  margin-top: 40px;
  flex-direction: row;
  align-items: normal;
`;

export const DivisionCnt = Styled.section`
  margin-top: 20px;
  position: relative;
`;

export const LoginAltCnt = Styled(BasicSection)`
  height: max-content;
  justify-content: normal;

  a#forgot_pwd {
    font-size: 12px;
  }
`;

export const LoginFb = Styled(BasicSection)`
  margin: 30px 0;
  flex-direction: row;
  align-items: normal;

  img {
    margin-right: 7px;
    height: 16px;
  }
`;

export const RegisterCnt = Styled(LoginCnt)`
  height: 65px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  p {
    margin-right: 5px;
  }

  a {
    color: var(--color-highlight);
  }
`;

export const DownCnt = Styled(BasicSection)`
  height: 100px;
  justify-content: space-around;

  img {
    height: 40px;
  }

  img:first-child {
    margin-right: 10px;
  }
`;

export const Form = Styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

export const Input = Styled.input`
  margin-bottom: ${(props = '7px') => props.marginBottom};
  border: 1px solid var(--color-border);
  border-radius: 3px;
  padding: 10px;
  height: 40px;
  background-color: var(--color-bg);
`;

export const InputBtn = Styled.input`
  border-radius: 3px;
  height: 30px;
  background-color: var(--color-highlight);
  color: var(--color-white);
`;

export const Span = Styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  background-color: var(--color-white);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: var(--color-font);
`;

export const Hr = Styled.hr`
  border-bottom: 1px solid var(--color-border);
`;
