import React, { Component } from "react";

import styled from "styled-components";

import { Button, Form, Input, ButtonWrapper } from "../../Global";
import { Linkton } from "../../Global";

import { register } from "../../../actions/firebaseAuth";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    username: "",
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
    const { registerSuccess, history } = this.props;
    if (registerSuccess) {
      history.push("/home");
    }
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
            <Button type="/home">Register</Button>
            <Linkton to="/login">Sign in</Linkton>
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
`;

const mapStateToProps = state => {
  return {
    registerSuccess: !state.firebase.auth.isEmpty
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
