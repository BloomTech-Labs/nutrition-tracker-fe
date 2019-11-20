import React from "react";
import styled from "styled-components";
import { BackSVG } from "../Global/icons";
import { Row, Col } from "./styles";

function TopBar(props) {
  const handleClick = () => {
    props.history.goBack();
  };

  return (
    <Row className="fixed-top" height="50px">
      <Col
        justify="center"
        align="center"
        style={{ flex: "0 0 50px" }}
        onClick={handleClick}
      >
        <BackSVG />
      </Col>
      <Col justify="flex-start">
        <PageTitle>{props.title}</PageTitle>
      </Col>
    </Row>
  );
}

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export default TopBar;
