import React from "react";
import { Container, Row, Col, H2 } from "../Global/styled";
import { Progress } from "reactstrap";
import CaloricBudget from "./components/CaloricBudget";

function DailyLog() {
  return (
    <Container fluid>
      <Row>
        <Col height="100px" align="center">
          <CaloricBudget consumed={1280} total={2140}/>
        </Col>
      </Row>
      <Row>
        <Col justify="center">
          <H2>Fats</H2>
        </Col>
        <Col justify="center">
          <H2>Carbs</H2>
        </Col>
        <Col justify="center">
          <H2>Protein</H2>
        </Col>
      </Row>
    </Container>
  );
}

export default DailyLog;
