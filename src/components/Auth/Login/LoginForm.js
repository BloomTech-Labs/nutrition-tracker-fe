import React, { Component } from "react";

import { Button, Form, Input, ButtonWrapper, Linkton } from "../../Global";
import styled from "styled-components";

import { login } from "../../../actions/firebaseAuth";
import { connect } from "react-redux";

class LoginForm extends Component {
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
    return (
      <LoginFormWrapper>
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
              Register now!
            </Linkton>
          </ButtonWrapper>
        </Form>
      </LoginFormWrapper>
    );
  }
}

const LoginFormWrapper = styled.div`
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
`;

export default connect(
  null,
  { login }
)(LoginForm);
