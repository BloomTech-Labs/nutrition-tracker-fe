import React, {useState} from "react";
import { Row, Col, Input } from "../../Global/styled";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const DisplaySettings = props => {
  const [intervalDropdownOpen, setIntervalDropdownOpen] = useState(false);
  const [timeZoneDropdownOpen, setTimeZoneDropdownOpen] = useState(false);

  const toggleIntervalDropdown = (e) => {
    setIntervalDropdownOpen(prevState => !prevState)
  };

  const handleSelection = e => {
    props.updateInterval(e.target.value);
  }

  const toggleTimeZoneDropdown = () => setTimeZoneDropdownOpen(prevState => !prevState);

  return (
    <Row>
      <Col justify="flex-start">
        <Dropdown isOpen={intervalDropdownOpen} toggle={toggleIntervalDropdown}>
          <DropdownToggle caret>{props.interval} min.</DropdownToggle>
          <DropdownMenu onClick={handleSelection}>
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
      </Col>
      {/* <Col justify="flex-end">
        <Dropdown isOpen={timeZoneDropdownOpen} toggle={toggleTimeZoneDropdown}>
          <DropdownToggle caret>Time Zone</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Current Timezone</DropdownItem>
            <DropdownItem>GMT+05</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>15 min.</DropdownItem>
            <DropdownItem>30 min.</DropdownItem>
            <DropdownItem>45 min.</DropdownItem>
            <DropdownItem>1 hour</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Col> */}
    </Row>
  );
};

export default DisplaySettings;
