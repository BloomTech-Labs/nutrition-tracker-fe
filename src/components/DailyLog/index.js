import React from "react";
import { Container, Row, Col } from "../Global/styled";
import { Progress } from "reactstrap";

function DailyLog() {
  return (
    <Container>
      <h1>Hey</h1>
      <Progress style={{ height: "50px" }}>
        <Progress bar color="success" value={1280} max={2140}>
          1280 cal
        </Progress>
      </Progress>
    </Container>
  );
}

export default DailyLog;
