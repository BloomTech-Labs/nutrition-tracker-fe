import React from "react";
import { PillButton, Header, Row, Col } from "./styles";

const DietaryGoal = () => {
  return (
    <>
      <Row>
        <Col justify="center">
          <Header>What's your dietary goal?</Header>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton outline color="primary">
            Lose Weight
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton outline color="primary">
            Gain Weight
          </PillButton>
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton outline color="primary">
            Eat Healthier
          </PillButton>
        </Col>
      </Row>
    </>
  );
};

export default DietaryGoal;
