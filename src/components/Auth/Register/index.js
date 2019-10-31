import React from "react";

import styled from "styled-components";

import { Button, Form, Input, ButtonWrapper } from "../../Global";
import { Linkton } from "../../Global";

const Register = props => {
  return (
    <RegisterWrapper>
      <h2>Register</h2>
      <Form onSubmit={e => e.preventDefault() && false}>
        <Input name="name" placeholder="Username" type="text" />

        <Input name="email" type="text" placeholder="Email" />

        <Input name="password" type="password" placeholder="Password" />

        <ButtonWrapper>
          <Button>Register</Button>

          <Linkton to="/">Go back to Login</Linkton>
        </ButtonWrapper>
      </Form>
    </RegisterWrapper>
  );
};

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Register;
