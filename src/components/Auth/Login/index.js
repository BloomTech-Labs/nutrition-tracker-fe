import React, { useState, useCallback, useContext } from "react";

import styled from "styled-components";

import { Button, Form, Input, ButtonWrapper } from "../../Global";
import { Linkton } from "../../Global";

import { withRouter, Redirect } from "react-router-dom";

// importing the firebase class I exported in src/firebase.js
import firebaseConfig from "../../firebase";

import { AuthContext } from "../index";

const Login = ({ history }) => {
  // creating state for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // creating login function to send creds to firebase and route to home upon success
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await firebaseConfig.auth().signInWithEmailAndPassword(email, password);
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <SignInWrapper>
      <h2>Sign in</h2>
      <Form onSubmit={handleLogin}>
        <Input
          name="email"
          type="email"
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
          <Button type="submit">Sign in</Button>
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

export default withRouter(Login);
