import React, { useState } from "react";
import { Btn, Frm, Inp, ButtonWrapper } from "../../Global";
import { Linkton } from "../../Global";
import styled from "styled-components";
import firebase from "../../firebase";

const Register = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <RegisterWrapper>
      <h2>Register</h2>
      <Frm onSubmit={e => e.preventDefault() && false}>
        <Inp
          name="name"
          placeholder="Username"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />

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
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <ButtonWrapper>
          <Btn type="submit" onClick={onRegister}>
            Register
          </Btn>

          <Linkton to="/">Go back to Login</Linkton>
        </ButtonWrapper>
      </Frm>
    </RegisterWrapper>
  );

  async function onRegister() {
    try {
      await firebase.register(name, email, password);
      props.history.replace("/home");
    } catch (error) {
      alert(error.message);
    }
  }
};

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Register;
