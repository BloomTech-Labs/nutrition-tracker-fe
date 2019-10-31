import React, { useContext } from "react";
import { Linkton } from "../Global";
import styled from "styled-components";
import theme from "../Global/theme";
import { AuthContext } from "../Auth";
import { Redirect } from "react-router-dom";

const LandingPage = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/home" />;
  }
  return (
    <LandingWrapper>
      <h1>NutraJournal</h1>
      <p>Create a new account!</p>
      <LoginButton to="/login">Sign in</LoginButton>
      <p>Already a member?</p>
      <RegisterButton to="/register">Register</RegisterButton>
    </LandingWrapper>
  );
};

const LandingWrapper = styled.div`
  height: 100vh;
  p {
    margin-top: 10px;
  }
`;

const LoginButton = styled(Linkton)`
  background: ${theme.primary};
`;

const RegisterButton = styled(Linkton)`
  background: ${theme.success};
`;

export default LandingPage;
