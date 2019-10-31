import React, { useState, useCallback } from "react";

import styled from "styled-components";

import { Button, Form, Input, ButtonWrapper } from "../../Global";
import { Linkton } from "../../Global";

import { withRouter } from "react-router-dom";

// importing the firebase class I exported in src/firebase.js
import firebaseConfig from "../../firebase";

const Register = ({ history }) => {
  // Using use state to set state for username, email and password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Creating a register function to send creds to firebase
  const handleSignUp = useCallback(
    async event => {
      event.preventDefault();
      try {
        await firebaseConfig
          .auth()
          .createUserWithEmailAndPassword(email, password);
        firebaseConfig.auth().currentUser.updateProfile({
          displayName: name
        });
        history.push("/home");
      } catch (error) {
        alert(error);
      }
    },
    [history, name, email, password]
  );

  return (
    <RegisterWrapper>
      <h2>Register</h2>
      <Form onSubmit={handleSignUp}>
        <Input
          name="name"
          placeholder="Username"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

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
          <Button type="submit">Register</Button>

          <Linkton to="/login">Sign in</Linkton>
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

export default withRouter(Register);
