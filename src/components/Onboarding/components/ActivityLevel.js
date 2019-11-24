import React from "react";

import { PillButton, H2, Row, Col } from "../../Global/styled";

// This is a functional component so I'm using these hooks from react-redux api to get state from reducers and run my dispatch functions from actions
import { useDispatch, useSelector } from "react-redux";
import { updateActivityLevel } from "../../../store/actions/onboardingActions";

import { Redirect } from "react-router-dom";

const ActivityLevel = props => {
  // If you want to use this hook you need to set it up like this every time before you use it
  const dispatch = useDispatch();

  // decon some router props
  const { history, path } = props;

  // Handles update action on click
  const handleClick = activityLevel => {
    // We are using the dispatch we set up with useDispatch to run our update action
    dispatch(updateActivityLevel(activityLevel));

    // Pushing our path to the next route after action has been dispatched
    history.push(`${path}/basic-info`);
  };

  // Using the useSelector hook to grab the sex state form our onboarding reducer
  // We are doing this because we need to see that we still have what got filled out on previous route
  const sex = useSelector(state => state.onboarding.sex);

  // If previous state isn't there, route back to landing so info can be filled out properly
  if (!sex) return <Redirect to="/landing" />;

  return (
    <>
      <Row>
        <Col justify="center">
          <H2>How active are you?</H2>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick(1.2)} outline color="primary">
            Sedentary
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton
            onClick={() => handleClick(1.375)}
            outline
            color="primary"
          >
            Light
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick(1.55)} outline color="primary">
            Moderate
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton
            onClick={() => handleClick(1.725)}
            outline
            color="primary"
          >
            Very
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick(1.9)} outline color="primary">
            Extra
          </PillButton>
        </Col>
      </Row>
    </>
  );
};

export default ActivityLevel;
