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
    const onboardingInfo = {
      sex: this.props.sex,
      activity_level: this.props.activity_level,
      dob: this.props.dob,
      weight_kg: this.props.weight_kg,
      height_cm: this.props.height_cm,
      weekly_goal_rate: this.props.weekly_goal_rate
    };
    console.log("Onboarding info:", onboardingInfo);
    this.props.googleLogin(onboardingInfo);
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
  return {
    registerSuccess: !state.firebase.auth.isEmpty,
    sex: state.onboarding.sex,
    activity_level: state.onboarding.activityLevel,
    dob: state.onboarding.date_of_birth,
    weight_kg: state.onboarding.weight_kg,
    height_cm: state.onboarding.height_cm,
    weekly_goal_rate: state.onboarding.target_rate
  };
};

export default connect(mapStateToProps, {
  register,
  googleLogin,
  facebookLogin
})(withRouter(Register));
