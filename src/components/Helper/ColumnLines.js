import React, { Component } from "react";
import styled from "styled-components";
import { Col as BS_Col } from "reactstrap";
import { Container as BS_Container, Row as BS_Row } from "../Global/styled";

class ColumnLines extends Component {
  render() {
    return (
      // <FixedWidthWrapper>
      <Container fluid>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
          <Col>5</Col>
          <Col>6</Col>
          <Col>7</Col>
          <Col>8</Col>
          <Col>9</Col>
          <Col>10</Col>
          <Col>11</Col>
          <Col>12</Col>
        </Row>
      </Container>
      // </FixedWidthWrapper>
    );
  }
}
const Container = styled(BS_Container)`
  position: absolute;

  height: 100vh;
`;

const Row = styled(BS_Row)`
  height: 100vh;
`;

const Col = styled(BS_Col)`
  border-right: 1px solid red;
  border-right-style: dashed;
  justify-content: center;
`;

/*
  // Uncomment to see column lines when fluid=false

  const FixedWidthWrapper = styled.div`
      position: absolute;
      display: flex;
      justify-content: center;

      width: 100%;
      height: 100vh;
  `;
*/

export default ColumnLines;
