import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";
import { googleRegister } from "../../../store/actions/firebaseAuth";
import { EmailSVG, GoogleSVG } from "../../Global/icons";
import { Col, H2, PillButton, Row } from "../../Global/styled";

class Register extends Component {
  // Handles google auth action and sends onboarding info to back end
  handleGoogleAuth = e => {
    e.preventDefault();
    this.props.googleRegister(this.props.onboardingInfo);
  };

  render() {
    const { registerSuccess, path } = this.props;
    if (registerSuccess) return <Redirect to="/daily-log" />;
    return (
      <>
        <Row>
          <Col justify="center" align="center" height="80px">
            <H2>Sign up and save your settings!</H2>
          </Col>
        </Row>
        <Row>
          <Col>
            <PillButton
              onClick={this.handleGoogleAuth}
              outline
              color="primary"
              id="googleRegister"
            >
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
        </Row>
        <Row>
          <Col>
            <PillButton
              onClick={() => this.props.history.push(`${path}/email`)}
              outline
              color="primary"
              id="emailRegister"
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
  return {
    registerSuccess: !state.firebase.auth.isEmpty
  };
};

export { Register };
export default connect(mapStateToProps, {
  googleRegister
})(withRouter(Register));
