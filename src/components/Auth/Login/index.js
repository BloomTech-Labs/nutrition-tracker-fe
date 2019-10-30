import React, { useState } from "react";

import styled from "styled-components";

import { Button, Form, Input, ButtonWrapper } from "../../Global";
import { Linkton } from "../../Global";

// importing the firebase class I exported in src/firebase.js
import firebase from "../../firebase";

const Login = props => {
  // creating state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // creating login function to send creds to firebase and route to home upon success
  async function login() {
    try {
      // firebase.login() is coming from the firebase class I created in src/firebase.js
      await firebase.login(email, password);
      props.history.replace("/");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <SignInWrapper>
      <h2>Sign in</h2>
      <Form onSubmit={e => e.preventDefault() && false}>
        <Input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonWrapper>
          <Button type="submit" onClick={login}>
            Sign in
          </Button>
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
