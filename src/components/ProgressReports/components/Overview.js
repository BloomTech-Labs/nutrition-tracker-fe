import React from "react";
import {Col, Row} from "../../Global/styled";
import WeightProgress from "./charts/WeightProgress";

const Overview = () => {
  return (
    <Row>
      <Col>
        <WeightProgress />
      </Col>
    </Row>
  );
};

export default Overview;
