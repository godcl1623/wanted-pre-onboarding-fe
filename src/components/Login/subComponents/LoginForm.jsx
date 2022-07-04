import React from 'react';
import { Form, Input, InputBtn } from '../style/LoginStyled';

const LoginForm = (props) => {
  const { refs, states, handlers } = props;
  const { inputEleId, inputElePwd } = refs;
  const { isIdValid, isPwdValid, isValidationPassed } = states;
  const { handleSubmit, handleChange, handleBlur } = handlers;

  return (
    <Form id="login-form" onSubmit={handleSubmit}>
      <Input
        ref={inputEleId}
        className={isIdValid === false ? 'invalid' : ''}
        type="text"
        name="user_id"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        ref={inputElePwd}
        className={isPwdValid === false ? 'invalid' : ''}
        type="password"
        name="password"
        placeholder="비밀번호"
        marginBottom="15px"
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <InputBtn
        className={isValidationPassed ? '' : 'disabled'}
        type="submit"
        name="login_btn"
        value="로그인"
      />
    </Form>
  );
};

export default LoginForm;
