import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { googleLogin } from "../../../store/actions/firebaseAuth";
import { EmailSVG, GoogleSVG } from "../../Global/icons";
import { Col, H2, PillButton, Row } from "../../Global/styled";

class LoginOptions extends Component {
  // logs user in through google
  handleGoogleAuth = e => {
    e.preventDefault();
    this.props.googleLogin();
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
            <PillButton
              onClick={this.handleGoogleAuth}
              outline
              color="primary"
              id="googleAuth"
            >
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
              onClick={() => this.props.history.push(`${path}/email`)}
              outline
              color="primary"
              id="emailAuth"
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
export default connect(null, { googleLogin })(LoginOptions);
