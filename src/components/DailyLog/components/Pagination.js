import React from "react";
import styled from "styled-components";
import { Row, Col } from "../../Global/styled";
import { Input as BS_Input, Button } from "reactstrap";
import { LeftCarotSVG, RightCarotSVG, CalendarSVG } from "../../Global/icons";
import theme from "../../Global/theme";

const Pagination = () => {

  const pageLeft = () => {
    console.log("PAGE LEFT");
  };

  const pageRight = () => {
    console.log("PAGE RIGHT");
  };

  return (
    <Row>
      <Col>
        <Wrapper>
          <Button onClick={pageLeft}>
            <LeftCarotSVG />
          </Button>
          <ActiveDate>
            <CalendarSVG margin="2 0 0 0" />
            <DateInput type="date" value="1991-02-02" />
          </ActiveDate>
          <Button onClick={pageRight}>
            <RightCarotSVG />
          </Button>
        </Wrapper>
      </Col>
    </Row>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 50px;

  padding-bottom: 10px;

  border-bottom: 1px solid black;
`;

const ActiveDate = styled.div`
  display: flex;
  margin-left: 60px;
`;

const DateInput = styled(BS_Input)`
  width: fit-content;
  font-size: 1.6rem;

  border: none;
  background-color: ${theme.color.light};

  &:before {
    content: attr(placeholder) !important;
    color: #aaa;
    margin-right: 0.5em;
  }

  &:focus:before,
  &:valid:before {
    content: "";
  }
`;

export default Pagination;
