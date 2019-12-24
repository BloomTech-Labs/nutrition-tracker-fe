import React from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
// import theme from "../Global/theme";
import { Col, Container, H1, PillButton, Row } from "../Global/styled";

class LandingPage extends React.Component {
  redirectToOnboarding = () => {
    this.props.history.push("/onboarding/sex");
  };

  redirectToLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col justify="center">
            <H1>NutriJournal</H1>
          </Col>
        </Row>
        <Row>
          <Col justify="center">
            <a href="https://platform.fatsecret.com">
              <img
                src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.svg"
                border="0"
                alt="fatsecret logo"
              />
            </a>
          </Col>
        </Row>
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
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // when user is not logged in isEmpty is true
    isLoggedIn: !state.firebase.auth.isEmpty
  };
};

export default connect(mapStateToProps, {})(withRouter(LandingPage));
