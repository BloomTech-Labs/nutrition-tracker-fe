import React from "react";
import { Row, Col } from "../../Global/styled";
import { Link } from "react-router-dom";
const FatSecretAttribution = () => {
  return (
    <Row>
      <Col height="37px" justify="center">
        <Link to="https://platform.fatsecret.com">
          <img
            src="https://platform.fatsecret.com/api/static/images/powered_by_fatsecret.svg"
            border="0"
          />
        </Link>
      </Col>
    </Row>
  );
};

export default FatSecretAttribution;
