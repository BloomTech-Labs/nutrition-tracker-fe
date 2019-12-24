import React from "react";
import styled from "styled-components";
import { BackSVG } from "../Global/icons";
import { Row, Col } from "./styles";

function TopBar(props) {
  // This is our current tob bar component that will take use back to last page
  // Will be replaced by HOC
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
        id="goBack"
      >
        <BackSVG />
      </Col>
      <Col justify="flex-start">
        <PageTitle id="pageTitle">{props.title}</PageTitle>
      </Col>
    </Row>
  );
}

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export default TopBar;
