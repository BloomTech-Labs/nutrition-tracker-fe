import React from "react";

import { Route } from "react-router-dom";

import { Container } from "../Global/styled";

// Onboarding Routes:
// import DietaryGoal from "./components/DietaryGoal";
import Sex from "./components/Sex";
import ActivityLevel from "./components/ActivityLevel";
import BasicInfo from "./components/BasicInfo";
import WeightGoal from "./components/WeightGoal";

class Onboarding extends React.Component {
  render() {
    // pulling the path from props.match and passing it to routes so we can use
    // the path variable as we use props.history to navigate through the routes
    const { path } = this.props.match;
    console.log("[Onboarding index.js] this.state", this.state);

    return (
      <Container justify="center" fluid={true}>
        {/* <Route
          path={`${path}/dietary-goal`}
          render={props => <DietaryGoal {...props} path={path} />}
        /> */}
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
      </Container>
    );
  }
}

export default Onboarding;
