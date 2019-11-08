import React, { Component } from "react";

import {
  Button,
  Form,
  Input,
  ButtonWrapper,
  Linkton
} from "../../Global/styled";
import styled from "styled-components";
import theme from "../../Global/theme";

import { login } from "../../../store/actions/firebaseAuth";
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
        </Form>
      </LoginFormWrapper>
    );
  }
}

const LoginFormWrapper = styled.div`
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
  { login }
)(Login);
