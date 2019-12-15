import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Loading from "../../Global/Loading";
import { Container } from "../../Global/styled";
import LoginOptions from "./LoginOptions";
// Routes
import LoginWithEmail from "./LoginWithEmail";

class Login extends React.Component {
  render() {
    // sets path variable
    const { path } = this.props.match;

    // once user logs in isLoggedIn will be true and route you to home page
    const { isLoggedIn, loading } = this.props;

    // If user is logged in on login page redirects them to protected route
    if (isLoggedIn) return <Redirect to="/daily-log" />;

    // After user logs in with google some time is spent initializing the user on firebases end
    // This if statement gives us a loading screen when that happens so it's a smooth transition to home page
    if (loading) return <Loading />;
    // Sets up routes for Login pages
    return (
      <Container justify="center" fluid={true} height={this.props.height}>
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
          id="emailRoute"
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
    isLoggedIn: !state.firebase.auth.isEmpty,
    loading: state.firebase.isInitializing
    // loading: state.auth.loggingIn
  };
};

export { Login };
export default connect(mapStateToProps, {})(Login);
