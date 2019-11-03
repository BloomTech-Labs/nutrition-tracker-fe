import React from "react";
import { Row, Col, Header, Input, PillButton } from "./styles";
import { CalendarSVG, RulerSVG, ScaleSVG } from "../../assets/svg-icons";
import InputGroupWithIcon from "./InputGroupWithIcon";

const WeightGoal = () => {
  return (
    <>
      <Row>
        <Col justify="center">
          <Header>Let's set some goals!</Header>
        </Col>
      </Row>
      <Row>
        <Col direction="column" align="flex-start">
          <h3>Target Weight</h3>
          <InputGroupWithIcon icon={ScaleSVG} placeholder="lbs." />
        </Col>
      </Row>
      <Row>
        <Col direction="column" align="flex-start">
          <h3>Target Date</h3>
          <InputGroupWithIcon icon={CalendarSVG} placeholder="lbs." />
        </Col>
      </Row>
      <Row>
        <Col>
          <PillButton color="success">Next</PillButton>
        </Col>
      </Row>
    </>
  );
};

export default WeightGoal;
