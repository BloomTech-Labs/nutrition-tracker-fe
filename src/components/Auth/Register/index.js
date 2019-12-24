import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import Loading from "../../Global/Loading";
import { Container } from "../../Global/styled";
// Routes
import RegisterOptions from "./RegisterOptions";
import RegisterWithEmail from "./RegisterWithEmail";

class Register extends React.Component {
  render() {
    const { path } = this.props.match;

    // once user logs in isLoggedIn will be true and route you to home page
    const { isLoggedIn, dob, loading } = this.props;

    // If user is logged in on login page redirects them to protected route
    if (isLoggedIn) return <Redirect to="/" id="homeRedirect" />;

    // If user is logged in on login page redirects them to protected route
    if (loading) return <Loading />;

    // If page refreshes we will lose onboarding data and back end won't be updated properly
    // If one piece of data is not filled out then it none of them are
    // In that even we will redirect them to the landing page to fill out the info again
    if (!dob) return <Redirect to="/" id="landingRedirect" />;

    // Onboarding object we send to back end
    // Passing this object down to RegisterOptions and RegisterWithEmail components
    // Those components will pass this object in as a parameter so data can be handled in the corresponding action
    const onboardingInfo = {
      sex: this.props.sex,
      activity_level: this.props.activity_level,
      dob: this.props.dob,
      weight_kg: this.props.weight_kg,
      target_weight_kg: this.props.target_weight_kg,
      height_cm: this.props.height_cm,
      weekly_goal_rate: this.props.weekly_goal_rate
    };

    return (
      <Container justify="center" fluid={true} height={this.props.height}>
        <Route
          exact
          path={path}
          render={props => (
            <RegisterOptions
              {...props}
              onboardingInfo={onboardingInfo}
              path={path}
              id="registerOptions"
            />
          )}
        />
        <Route
          id="emailRegisterRoute"
          path={`${path}/email`}
          render={props => (
            <RegisterWithEmail
              {...props}
              onboardingInfo={onboardingInfo}
              path={path}
              id="registerWithEmail"
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

    // when user is logging we will throw up a loading screen
    loading: state.firebase.isInitializing,

    // Pulling in this state from onboarding reducer so we can create the onboarding object to pass to register actions
    sex: state.onboarding.sex,
    activity_level: state.onboarding.activityLevel,
    dob: state.onboarding.date_of_birth,
    weight_kg: state.onboarding.weight_kg,
    target_weight_kg: state.onboarding.target_weight_kg,
    height_cm: state.onboarding.height_cm,
    weekly_goal_rate: state.onboarding.target_rate
  };
};

export { Register };
export default connect(mapStateToProps, {})(Register);
