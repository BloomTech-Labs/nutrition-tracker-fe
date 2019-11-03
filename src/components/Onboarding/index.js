import React from "react";
import { Route } from "react-router-dom";
import { Container } from "./styles";
import TopBar from "./TopBar";
import DietaryGoal from "./DietaryGoal";
import Sex from "./Sex";
import ActivityLevel from "./ActivityLevel";
import BasicInfo from "./BasicInfo";
import WeightGoal from "./WeightGoal";

class Onboarding extends React.Component {
  state = {
    userInfo: {
      sex: "",
      weight_kg: 0,
      height_cm: 0,
      date_of_birth: "",
      activityLevel: 0,
      target_weight: 0,
      target_date: "",
      target_rate: 0
    },
    dietaryGoal: ""
  };

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
      </Container>
    );
  }
}

export default Onboarding;
