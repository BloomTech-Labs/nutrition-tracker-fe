import moment from "moment-timezone";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button as BS_Button, Input as BS_Input } from "reactstrap";
import styled from "styled-components";
import { updateCurrentDate } from "../../../store/actions/dailyLogActions";
import { CalendarSVG, LeftCarotSVG, RightCarotSVG } from "../../Global/icons";
import { Col, Row } from "../../Global/styled";
import theme from "../../Global/theme";

const Pagination = ({ currentDate, currentTimeZone }) => {
  const dispatch = useDispatch();
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

    dispatch(updateCurrentDate(newDate));
  };

  const changeDate = () => {
    if (moment(dateInput).isValid()) {
      dispatch(updateCurrentDate(dateInput));
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
  background-color: ${theme.color.nutri_background};

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
  background-color: ${theme.color.nutri_background};
  border: none;
`;

export default Pagination;
