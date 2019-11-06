import React from "react";
import { Route } from "react-router-dom";
import { Container } from "./styles";
import TopBar from "./TopBar";
import DietaryGoal from "./components/DietaryGoal";
import Sex from "./components/Sex";
import ActivityLevel from "./components/ActivityLevel";
import BasicInfo from "./components/BasicInfo";
import WeightGoal from "./components/WeightGoal";
import RegistrationOptions from "./components/RegistrationOptions";
import Register from "./components/Register";

class Onboarding extends React.Component {
  render() {
    const { path } = this.props.match;
    console.log("[Onboarding index.js] this.state", this.state);

    return (
      <Container direction="column" justify="center" fluid={true}>
        <TopBar {...this.props} />
        <Route
          path={`${path}/dietary-goal`}
          render={props => <DietaryGoal {...props} path={path} />}
        />
        <Route
          path={`${path}/sex`}
          render={props => <Sex {...props} path={path} />}
        />
        <Route
          path={`${path}/activity-level`}
          render={props => <ActivityLevel {...props} path={path} />}
        />
        <Route
          path={`${path}/basic-info`}
          render={props => <BasicInfo {...props} path={path} />}
        />
        <Route
          path={`${path}/weight-goal`}
          render={props => <WeightGoal {...props} path={path} />}
        />
        <Route
          path={`${path}/registration-options`}
          render={props => <RegistrationOptions {...props} path={path} />}
        />
        <Route
          path={`${path}/register`}
          render={props => <Register {...props} path={path} />}
        />
      </Container>
    );
  }
}

export default Onboarding;
