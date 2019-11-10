import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "../../Global/styled";
import TopBar from "../../Onboarding/TopBar";
import LoginWithEmail from "./LoginWithEmail";
import LoginOptions from "./LoginOptions";

class Login extends React.Component {
  render() {
    const { path } = this.props.match;

    return (
      <Container justify="center" fluid={true}>
        <TopBar {...this.props} />
        <Route
          exact
          path={path}
          render={props => <LoginOptions {...props} path={path} />}
        />
        <Route
          path={`${path}/email`}
          render={props => <LoginWithEmail {...props} path={path} />}
        />
      </Container>
    );
  }
}

export default Login;
