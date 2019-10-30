import React, { useState } from "react";
import { Btn, Frm, Inp, ButtonWrapper } from "../../Global";
import { Linkton } from "../../Global";
import firebase from "../../firebase";
import styled from "styled-components";

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SignInWrapper>
      <h2>Sign in</h2>
      <Frm onSubmit={e => e.preventDefault() && false}>
        <Inp
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Inp
          name="password"
          type="password"
          placeholder="Email"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <ButtonWrapper>
          <Btn type="submit" onClick={login}>
            Sign in
          </Btn>
          <Linkton to="/register">Register now!</Linkton>
        </ButtonWrapper>
      </Frm>
    </SignInWrapper>
  );

  async function login() {
    try {
      await firebase.login(email, password);
      props.history.replace("/");
    } catch (error) {
      alert(error.message);
    }
  }
};

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SignIn;
