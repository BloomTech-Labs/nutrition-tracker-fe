import React from "react";
import { Linkton } from "../Global";
import styled from "styled-components";
import theme from "../Global/theme";
import { connect } from "react-redux";

const LandingPage = ({ isLoggedIn, history }) => {
  if (isLoggedIn) {
    history.push("/");
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

const mapStateToProps = state => {
  return {
    isLoggedIn: state.firebase.auth.uid
  };
};

export default connect(
  mapStateToProps,
  {}
)(LandingPage);
