import React from "react";

import { Route, Redirect } from "react-router-dom";

import TopBar from "../../Onboarding/TopBar";
import { Container } from "../../Global/styled";

// Routes
import LoginWithEmail from "./LoginWithEmail";
import LoginOptions from "./LoginOptions";

import { connect } from "react-redux";

class Login extends React.Component {
  render() {
    // sets path variable
    const { path } = this.props.match;

    // once user logs in isLoggedIn will be true and route you to home page
    const { isLoggedIn } = this.props;

    // If user is logged in on login page redirects them to protected route
    if (isLoggedIn) return <Redirect to="/" />;

    // Sets up routes for Login pages
    return (
      <Container justify="center" fluid={true}>
        <TopBar {...this.props} />

        <Route
          exact
          path={path}
          render={props => (
            <LoginOptions
              {...props}
              path={path}
              handleGoogleAuth={this.handleGoogleAuth}
              handleFacebookAuth={this.handleFacebookAuth}
            />
          )}
        />
        <Route
          path={`${path}/email`}
          render={props => (
            <LoginWithEmail
              {...props}
              path={path}
              handleLogin={this.handleLogin}
            />
          )}
        />
      </Container>
    );
  }
}

export const mapStateToProps = state => {
  return {
    // when user is not logged in isEmpty is true
    isLoggedIn: !state.firebase.auth.isEmpty
  };
};

export {Login};
export default connect(mapStateToProps, {})(Login);
