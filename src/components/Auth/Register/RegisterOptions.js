import React, { Component } from "react";

import styled from "styled-components";

import { PillButton, Row, Col } from "../../Global/styled";

import { GoogleSVG, FacebookSVG, EmailSVG } from "../../Global/icons";

import {
  register,
  googleLogin,
  facebookLogin
} from "../../../store/actions/firebaseAuth";
import { connect } from "react-redux";

import { Redirect, withRouter } from "react-router-dom";

class Register extends Component {
  handleGoogleAuth = e => {
    e.preventDefault();
    this.props.googleLogin();
  };

  handleFacebookAuth = e => {
    e.preventDefault();
    this.props.facebookLogin();
  };

  redirectToEmailRegister = () => {
    this.props.push();
  };

  render() {
    const { registerSuccess, path } = this.props;
    if (registerSuccess) return <Redirect to="/" />;
    return (
      <>
        <Row>
          <Col justify="center">
            <Header>Sign up and save your settings!</Header>
          </Col>
        </Row>
        <Row>
          <Col>
            <PillButton onClick={this.handleGoogleAuth} color="light">
              <GoogleSVG /> <ButtonLabel>Sign up with Google</ButtonLabel>
            </PillButton>
          </Col>
          <div className="w-100"></div>
          <Col>
            <PillButton onClick={this.handleFacebookAuth} color="light">
              <FacebookSVG /> <ButtonLabel>Sign up with Facebook</ButtonLabel>
            </PillButton>
          </Col>
          <div className="w-100"></div>
        </Row>
        <Row>
          <Col>
            <PillButton
              onClick={() => this.props.history.push(`${path}/email`)}
              color="light"
            >
              <EmailSVG /> <ButtonLabel>Sign up with Email</ButtonLabel>
            </PillButton>
          </Col>
        </Row>
      </>
    );
  }
}

const Header = styled.h1`
  font-size: 2.8rem;
`;

const mapStateToProps = state => {
  console.log("username:", state.firebase.auth);
  return {
    registerSuccess: !state.firebase.auth.isEmpty
  };
};

const ButtonLabel = styled.span`
  font-size: 1.6rem;
  margin-left: 20%;
  text-align: center;
`;

export default connect(
  mapStateToProps,
  { register, googleLogin, facebookLogin }
)(withRouter(Register));
