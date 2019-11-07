import React, { Component } from "react";

import styled from "styled-components";

import { Button, Form, Input, ButtonWrapper, Linkton } from "../../Global";
import theme from "../../Global/theme";

import { register } from "../../../actions/firebaseAuth";
import { connect } from "react-redux";

import { Redirect, withRouter } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    password: "",
    email: ""
  };

  handleInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state.name, this.state.email, this.state.password);
  };
  render() {
    const { registerSuccess } = this.props;
    if (registerSuccess) return <Redirect to="/" />;
    return (
      <RegisterWrapper>
        <h2>Register</h2>
        <Form onSubmit={this.handleRegister}>
          <Input
            name="name"
            placeholder="Username"
            type="text"
            onChange={this.handleInputChange}
          />

          <Input
            name="email"
            type="text"
            placeholder="Email"
            onChange={this.handleInputChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleInputChange}
          />

          <ButtonWrapper>
            <RegisterBtn type="submit">Register</RegisterBtn>
            <SignInBtn to="/landing">Back to Login</SignInBtn>
          </ButtonWrapper>
        </Form>
      </RegisterWrapper>
    );
  }
}

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin: 10px 0;
  }
`;

const RegisterBtn = styled(Button)`
  width: 200px;
  border-radius: 25px;
  background: ${theme.success};
  border-color: ${theme.success};
`;
const SignInBtn = styled(Linkton)`
  width: 200px;
  border-radius: 25px;
  background: ${theme.primary};
  border-color: ${theme.primary};
`;

const mapStateToProps = state => {
  console.log("username:", state.firebase.auth);
  return {
    registerSuccess: !state.firebase.auth.isEmpty
  };
};

export default connect(
  mapStateToProps,
  { register }
)(withRouter(Register));
