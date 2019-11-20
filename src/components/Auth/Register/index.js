import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Container } from "../../Global/styled";
import TopBar from "../../Onboarding/TopBar";
import RegisterOptions from "./RegisterOptions";
import RegisterWithEmail from "./RegisterWithEmail";

class Register extends React.Component {
  render() {
    const { path } = this.props.match;
    const { isLoggedIn, date_of_birth } = this.props;

    if (isLoggedIn) return <Redirect to="/" />;
    if (!date_of_birth) return <Redirect to="/" />;

    return (
      <Container justify="center" fluid={true}>
        {console.log(new Date(this.props.date_of_birth))}
        <TopBar {...this.props} />
        <Route
          exact
          path={path}
          render={props => <RegisterOptions {...props} path={path} />}
        />
        <Route
          path={`${path}/email`}
          render={props => <RegisterWithEmail {...props} path={path} />}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    // when user is not logged in isEmpty is true
    isLoggedIn: !state.firebase.auth.isEmpty,
    date_of_birth: state.onboardingReducer.date_of_birth
  };
};

export default connect(mapStateToProps, {})(Register);
