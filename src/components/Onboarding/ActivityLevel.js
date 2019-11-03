import React from "react";
import { PillButton, Header, Row, Col } from "./styles";

const ActivityLevel = ({ history, path }) => {
  const handleClick = activityLevel => {
    // update activityLevel
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

export default ActivityLevel;
