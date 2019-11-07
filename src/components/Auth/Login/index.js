import React from "react";

import styled from "styled-components";

import { Button, Form, Input, ButtonWrapper } from "../../Global/styled";
import { Linkton } from "../../Global/styled";

const Login = props => {
  return (
    <SignInWrapper>
      <h2>Sign in</h2>
      <Form onSubmit={e => e.preventDefault() && false}>
        <Input name="email" type="text" placeholder="Email" />

        <Input name="password" type="password" placeholder="Password" />
        <ButtonWrapper>
          <Button>Sign in</Button>
          <Linkton to="/register">Register now!</Linkton>
        </ButtonWrapper>
      </Form>
    </SignInWrapper>
  );
};

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Login;
