import React from "react";

// pulling in styles
import styled from "styled-components";
// import theme from "../Global/theme";
import { Container, PillButton, Row, Col, Header } from "../Global/styled";

import { connect } from "react-redux";

import { Redirect, withRouter } from "react-router-dom";

class LandingPage extends React.Component {
  redirectToOnboarding = () => {
    this.props.history.push("/onboarding/dietary-goal");
  };

  redirectToLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    // once user logs in isLoggedIn will be true and route you to home page
    const { isLoggedIn } = this.props;
    if (isLoggedIn) return <Redirect to="/" />;

    return (
      <LandingPageWrapper fluid>
        <Row>
          <Col justify="center">
            <Header>NutriJournal</Header>
          </Col>
        </Row>
        {/* <Header>NutriJournal</Header> */}
        <Row className="fixed-bottom">
          <Col>
            <PillButton color="success" onClick={this.redirectToOnboarding}>
              Create a New Account
            </PillButton>
          </Col>
          <div className="w-100"></div>
          <Col className="col">
            <PillButton
              className="login"
              onClick={this.redirectToLogin}
              color="primary"
              outline
            >
              Login
            </PillButton>
          </Col>
        </Row>
      </LandingPageWrapper>
    );
  }
}

const LandingPageWrapper = styled(Container)`
  .login {
    margin-bottom: 50px;
  }
  .col {
    padding: 0 3.5rem;
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
  {}
)(withRouter(LandingPage));
