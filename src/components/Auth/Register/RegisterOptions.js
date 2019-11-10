import React, { Component } from "react";

import styled from "styled-components";

import { PillButton, Row, Col, H2 } from "../../Global/styled";

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

  render() {
    const { registerSuccess, path } = this.props;
    if (registerSuccess) return <Redirect to="/" />;
    return (
      <>
        <Row>
          <Col justify="center" align="center" height="80px">
            <H2>Sign up and save your settings!</H2>
          </Col>
        </Row>
        <Row>
          <Col>
            <PillButton onClick={this.handleGoogleAuth} outline color="primary">
              <Row align="center">
                <Col xs="3">
                  <GoogleSVG />
                </Col>
                <Col>
                  <ButtonLabel>Sign up with Google</ButtonLabel>
                </Col>
              </Row>
            </PillButton>
          </Col>
          <div className="w-100"></div>
          <Col>
            <PillButton
              onClick={this.handleFacebookAuth}
              outline
              color="primary"
            >
              <Row align="center">
                <Col xs="3">
                  <FacebookSVG />
                </Col>
                <Col>
                  <ButtonLabel>Sign up with Facebook</ButtonLabel>
                </Col>
              </Row>
            </PillButton>
          </Col>
          <div className="w-100"></div>
        </Row>
        <Row>
          <Col>
            <PillButton
              onClick={() => this.props.history.push(`${path}/email`)}
              outline
              color="primary"
            >
              <Row align="center">
                <Col xs="3">
                  <EmailSVG />
                </Col>
                <Col>
                  <ButtonLabel>Sign up with Email</ButtonLabel>
                </Col>
              </Row>
            </PillButton>
          </Col>
        </Row>
      </>
    );
  }
}

const ButtonLabel = styled.div`
  font-size: 1.6rem;
  /* color: black; */
`;

const mapStateToProps = state => {
  console.log("username:", state.firebase.auth);
  return {
    registerSuccess: !state.firebase.auth.isEmpty
  };
};

export default connect(
  mapStateToProps,
  { register, googleLogin, facebookLogin }
)(withRouter(Register));
