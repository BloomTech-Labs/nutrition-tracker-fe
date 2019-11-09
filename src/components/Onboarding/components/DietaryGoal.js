import React from "react";
import { PillButton, Header, Row, Col } from "../styles";

const DietaryGoal = ({ history, path }) => {
  const handleClick = goal => {
    history.push(`${path}/sex`);
  };

  return (
    <>
      <Row>
        <Col justify="center">
          <Header>What's your dietary goal?</Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton
            onClick={() => handleClick("lose")}
            outline
            color="primary"
          >
            Lose Weight
          </PillButton>
        </Col>
        <div className="w-100"></div>

        <Col>
          <PillButton
            onClick={() => handleClick("gain")}
            outline
            color="primary"
          >
            Gain Weight
          </PillButton>
        </Col>
        <div className="w-100"></div>
        <Col>
          <PillButton
            onClick={() => handleClick("maintain")}
            outline
            color="primary"
          >
            Eat Healthier
          </PillButton>
        </Col>
      </Row>
    </>
  );
};

export default DietaryGoal;
