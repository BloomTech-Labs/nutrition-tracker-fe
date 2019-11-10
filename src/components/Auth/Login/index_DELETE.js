import React, { Component } from "react";

import styled from "styled-components";
import theme from "../../Global/theme";
import {
  Button,
  Form,
  Input,
  ButtonWrapper,
  Linkton,
  SignInButton,
  Container
} from "../../Global/styled";

import {
  login,
  googleLogin,
  facebookLogin
} from "../../../store/actions/firebaseAuth";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

class Login extends Component {
  // sets the value of the input to it's corresponding piece of state
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // does the login thing, ya know?
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
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
      <LoginFormWrapper>
        <h2>Sign in here</h2>
        <Form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            onChange={this.handleChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <ButtonWrapper>
            <Button className="submit" type="submit">
              Sign in
            </Button>
            <Linkton className="register" to="/register">
              Register now
            </Linkton>
          </ButtonWrapper>
          <SignInButton className="google" onClick={this.handleGoogleAuth}>
            Sign in with Google
          </SignInButton>
          <SignInButton className="facebook" onClick={this.handleFacebookAuth}>
            Sign in with Facebook
          </SignInButton>
        </Form>
      </LoginFormWrapper>
    );
  }
}

const LoginFormWrapper = styled(Container)`
  margin: 0 auto;
  width: 204px;
  form {
    input {
      margin-top: 10px;
    }
    button {
      margin-top: 10px;
    }
    a {
      margin-top: 10px;
    }
  }
  .submit {
    background: ${theme.color.success};
    border-color: ${theme.color.success};
    &:hover {
      background: ${theme.color.dark};
      border-color: ${theme.color.dark};
    }
  }
  .register {
    background: ${theme.color.primary};
    &:hover {
      background: ${theme.color.dark};
    }
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
)(Login);
