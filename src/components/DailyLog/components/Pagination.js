import React, { useState } from "react";
import moment from "moment-timezone";
import styled from "styled-components";
import { Row, Col } from "../../Global/styled";
import { Input as BS_Input, Button as BS_Button } from "reactstrap";
import { LeftCarotSVG, RightCarotSVG, CalendarSVG } from "../../Global/icons";
import theme from "../../Global/theme";

const Pagination = ({ currentDate, updateCurrentDate, currentTimeZone }) => {
  const [dateInput, setDateInput] = useState("");

  const pageDate = direction => {
    const newDate =
      direction === "left"
        ? moment
            .tz(currentDate, currentTimeZone)
            .subtract(1, "d")
            .format("YYYY-MM-DD")
        : moment
            .tz(currentDate, currentTimeZone)
            .add(1, "d")
            .format("YYYY-MM-DD");

    updateCurrentDate(newDate);
  };

  const changeDate = () => {
    if (moment(dateInput).isValid()) {
      updateCurrentDate(dateInput);
      setDateInput("");
    } else setDateInput(currentDate);
  };

  const handleChange = e => {
    setDateInput(e.target.value);
  };

  return (
    <Row>
      <Col>
        <Wrapper>
          <Button onClick={() => pageDate("left")}>
            <LeftCarotSVG />
          </Button>
          <ActiveDate>
            <CalendarSVG margin="2 0 0 0" />
            <DateInput
              type="date"
              value={dateInput || currentDate}
              onChange={handleChange}
              onBlur={changeDate}
            />
          </ActiveDate>
          <Button onClick={() => pageDate("right")}>
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
  /* width: fit-content; */
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

const Button = styled(BS_Button)`
  background-color: ${theme.color.light};
  border: none;

`;

export default Pagination;
