import React from "react";
import { Col, Row } from "../../Global/styled";
import MacroProgress from "./charts/MacroProgress";

const Macros = () => {
  return (
    <Row>
      <Col>
        <MacroProgress />
      </Col>
    </Row>
  );
};
export default Macros;
