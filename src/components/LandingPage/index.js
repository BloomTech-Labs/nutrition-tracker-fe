import React from "react";

// pulling in styles
import styled from "styled-components";
import theme from "../Global/theme";
import { Button, Linkton } from "../Global/styled";

// connecting redux state
import {
  login,
  googleLogin,
  facebookLogin
} from "../../store/actions/firebaseAuth";
import { connect } from "react-redux";

import { Redirect, withRouter } from "react-router-dom";

class LandingPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleGoogleAuth = e => {
    e.preventDefault();
    this.props.googleLogin();
  };

  handleFacebookAuth = e => {
    e.preventDefault();
    this.props.facebookLogin();
  };

  render() {
    // once user logs in isLoggedIn will be true and route you to home page
    const { isLoggedIn } = this.props;
    if (isLoggedIn) return <Redirect to="/" />;
    return (
      <LandingPageWrapper>
        <h1>Welcome to NutraJournal</h1>
        <EmailLoginBtn className="email" to="/login">
          Sign in with Email
        </EmailLoginBtn>
        <SignInBtn className="google" onClick={this.handleGoogleAuth}>
          Sign in with Google
        </SignInBtn>
        <SignInBtn className="facebook" onClick={this.handleFacebookAuth}>
          Sign in with Facebook
        </SignInBtn>
        <RegisterBtn to="/register">Register with Email</RegisterBtn>
      </LandingPageWrapper>
    );
  }
}

const LandingPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .google {
    background: ${theme.color.success};
    border-color: ${theme.color.success};
    color: ${theme.color.light};
    &:hover {
      border-color: ${theme.color.dark};
    }
  }
  .facebook {
    background: ${theme.color.primary};
    border-color: ${theme.color.primary};
    color: ${theme.color.light};
    &:hover {
      border-color: ${theme.color.dark};
    }
  }
  button,
  a {
    margin: 5px 0;
  }
`;

const SignInBtn = styled(Button)`
  width: 204px;
  border-radius: 25px;
  height: 40px;
  background: ${theme.color.light};
  color: ${theme.color.dark};
  font-weight: bold;
  font-size: 1.4rem;
`;

const EmailLoginBtn = styled(Linkton)`
  width: 204px;
  border-radius: 25px;
  height: 40px;
  background: ${theme.color.light};
  color: ${theme.color.dark};
  font-weight: bold;
  font-size: 1.4rem;
`;

const RegisterBtn = styled(Linkton)`
  width: 204px;
  border-radius: 25px;
  height: 40px;
  background: ${theme.color.dark};
  color: ${theme.color.light};
  font-weight: bold;
  font-size: 1.4rem;
  &:hover {
    background: ${theme.color.light};
    color: ${theme.color.dark};
  }
`;

const mapStateToProps = state => {
  return {
    // when user is not logged in isEmpty is true
    isLoggedIn: !state.firebase.auth.isEmpty
  };
};

export default connect(
  mapStateToProps,
  { login, googleLogin, facebookLogin }
)(withRouter(LandingPage));
