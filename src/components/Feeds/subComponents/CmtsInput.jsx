import React from 'react';
import { AiOutlineSmile } from 'react-icons/ai';
import {
  CmtsInput as EmptyInput,
  Button,
  Form,
  Input,
} from '../style/FeedsStyled';

const CmtsInput = ({ handleSubmit }) => {
  return (
    <EmptyInput>
      <Button>
        <AiOutlineSmile className="svg" />
      </Button>
      <Form className="form-comments" onSubmit={handleSubmit}>
        <Input type="text" name="input_cmts" placeholder="댓글 달기..." />
        <Input type="submit" name="smt_cmts" value="게시" />
      </Form>
    </EmptyInput>
  );
};

export default CmtsInput;
