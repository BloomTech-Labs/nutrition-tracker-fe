import React from "react";
import { Container, Row, Col, H2, H3 } from "../Global/styled";
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
          <H3>Fats</H3>
        </Col>
        <Col justify="center">
          <H3>Carbs</H3>
        </Col>
        <Col justify="center">
          <H3>Protein</H3>
        </Col>
      </Row>
    </Container>
  );
}

export default DailyLog;
