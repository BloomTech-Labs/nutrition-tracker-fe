import moment from "moment-timezone";
import React, {useState} from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import styled from "styled-components";
import { Col, Row } from "../../Global/styled";

const DisplaySettings = ({updateInterval, interval, currentDate, currentTimeZone}) => {  
  const [intervalDropdownOpen, setIntervalDropdownOpen] = useState(false);

  const toggleIntervalDropdown = () => setIntervalDropdownOpen(prevState => !prevState)
  const handleSelection = e => updateInterval(e.target.value);

  const gmtOffset = moment
    .tz(currentDate, currentTimeZone)
    .format("Z");

  const tzAbbreviation = moment
    .tz(currentDate, currentTimeZone)
    .format("z");

  return (
    <Row>
      <Col justify="flex-start" height="30px" align="center">
        <TimeZone>Current Time-Zone: {tzAbbreviation} (GMT{gmtOffset})</TimeZone>
      </Col>
      {/* <Col justify="flex-end">
        <Dropdown isOpen={intervalDropdownOpen} toggle={toggleIntervalDropdown} size="lg">
          <DropdownToggle caret>Interval: {interval} min.</DropdownToggle>
          <DropdownMenu onClick={handleSelection} size="lg">
            <DropdownItem header>Default</DropdownItem>
            <DropdownItem value={30}>30 min</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value={0}>none</DropdownItem>
            <DropdownItem value={15}>15 min</DropdownItem>
            <DropdownItem value={30}>30 min</DropdownItem>
            <DropdownItem value={45}>45 min</DropdownItem>
            <DropdownItem value={60}>1 hour</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col> */}
    </Row>
  );
};

const TimeZone = styled.span`
  text-align: right;
`;

export default DisplaySettings;
