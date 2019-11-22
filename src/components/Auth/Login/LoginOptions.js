import React, { Component } from "react";

import styled from "styled-components";

import { PillButton, Row, Col, H2 } from "../../Global/styled";

import { GoogleSVG, FacebookSVG, EmailSVG } from "../../Global/icons";

import {
  googleLogin,
  facebookLogin
} from "../../../store/actions/firebaseAuth";
import { connect } from "react-redux";

class LoginOptions extends Component {
  // logs user in through google
  handleGoogleAuth = e => {
    e.preventDefault();
    this.props.googleLogin();
  };

  // logs user in through facebook
  handleFacebookAuth = e => {
    e.preventDefault();
    this.props.facebookLogin();
  };
  render() {
    const { path } = this.props;
    return (
      <>
        <Row>
          <Col justify="center" align="center" height="80px">
            <H2>Sign in to continue!</H2>
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
                  <ButtonLabel>Sign in with Google</ButtonLabel>
                </Col>
              </Row>
            </PillButton>
          </Col>
        </Row>
        <Row>
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
                  <ButtonLabel>Sign in with Facebook</ButtonLabel>
                </Col>
              </Row>
            </PillButton>
          </Col>
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
                  <ButtonLabel>Sign in with Email</ButtonLabel>
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
`;

export { LoginOptions };
export default connect(null, { googleLogin, facebookLogin })(LoginOptions);
