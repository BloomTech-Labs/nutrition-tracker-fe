import React from "react";

// pulling in styles
import styled from "styled-components";
import theme from "../../Global/theme";
import { Button } from "../../Global";

import LoginForm from "./LoginForm";

// import firebase from "../../firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

// connecting redux state
import {
  login,
  googleLogin,
  facebookLogin
} from "../../../actions/firebaseAuth";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    show: false
  };

  showLogin = () => {
    this.setState(pervState => ({
      show: !pervState.show
    }));
  };

  handleGoogleAuth = e => {
    e.preventDefault();
    this.props.googleLogin();
    // this.props.history.push("/");
  };

  handleFacebookAuth = e => {
    e.preventDefault();
    this.props.facebookLogin();
    // this.props.history.push("/");
  };

  render() {
    // once user logs in isLoggedIn will be true and route you to home page
    const { isLoggedIn, history } = this.props;
    if (isLoggedIn) {
      history.push("/");
    }
    return (
      <SignInWrapper>
        <h1>Welcome to NutraJournal!</h1>
        <SignInBtn onClick={this.handleGoogleAuth}>
          Sign in with Google!
        </SignInBtn>
        <SignInBtn onClick={this.handleFacebookAuth}>
          Sign in with Facebook!
        </SignInBtn>
        <SignInBtn onClick={this.showLogin}>Sign in with Email</SignInBtn>
        {this.state.show && (
          <div>
            <LoginForm />
          </div>
        )}
      </SignInWrapper>
    );
  }
}

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .submit {
    background: ${theme.success};
    border-color: ${theme.success};
    &:hover {
      background: ${theme.dark};
      border-color: ${theme.dark};
    }
  }
  .register {
    background: ${theme.primary};
    &:hover {
      background: ${theme.dark};
    }
  }
`;

const SignInBtn = styled(Button)`
  width: 204px;
  border-radius: 0;
  height: 40px;
  background: ${theme.light};
  color: ${theme.dark};
  font-weight: bold;
  font-size: 1.4rem;
`;

const mapStateToProps = state => {
  return {
    // when user is not logged in isEmpty is true so I use a ! to make isLoggedIn more readable
    isLoggedIn: !state.firebase.auth.isEmpty
  };
};

export default connect(
  mapStateToProps,
  { login, googleLogin, facebookLogin }
)(Login);
