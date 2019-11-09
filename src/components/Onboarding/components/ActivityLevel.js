import React from "react";
import { connect } from "react-redux";
import { PillButton, Header, Row, Col } from "../styles";
import { updateActivityLevel } from "../../../actions/onboardingActions";

const ActivityLevel = props => {
  const { history, path } = props;

  const handleClick = activityLevel => {
    props.updateActivityLevel(activityLevel);
    history.push(`${path}/basic-info`);
  };

  return (
    <div>
      <Header>How active are you?</Header>
      <Row>
        <Col>
          <PillButton onClick={() => handleClick(1.2)} outline color="primary">
            Sedentary
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <PillButton
            onClick={() => handleClick(1.375)}
            outline
            color="primary"
          >
            Light
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <PillButton onClick={() => handleClick(1.55)} outline color="primary">
            Moderate
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <PillButton
            onClick={() => handleClick(1.725)}
            outline
            color="primary"
          >
            Very
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <PillButton onClick={() => handleClick(1.9)} outline color="primary">
            Extra
          </PillButton>
        </Col>
      </Row>
    </div>
  );
};

export default connect(
  null,
  { updateActivityLevel }
)(ActivityLevel);
