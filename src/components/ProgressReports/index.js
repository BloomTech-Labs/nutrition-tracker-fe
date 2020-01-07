import classnames from "classnames";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button as BS_Button,
  ButtonGroup as BS_ButtonGroup,
  NavItem as BS_NavItem,
  Nav,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap";
import styled from "styled-components";
import {
  setProgressPeriodBiannual,
  setProgressPeriodMonthly,
  setProgressPeriodQuarterly,
  setProgressPeriodWeekly
} from "../../store/actions/progressPeriodActions";
import { Col, Container, H3, H4, Row } from "../Global/styled";
import theme from "../Global/theme";
import Macros from "./components/Macros";
import Overview from "./components/Overview";

const ProgressReports = props => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container height={props.height} fluid>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            <TabHeader>Overview</TabHeader>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            <TabHeader>Macros</TabHeader>
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Overview />
        </TabPane>
        <TabPane tabId="2">
          <Macros />
        </TabPane>
      </TabContent>
      <Row>
        <Col justify="center">
          <ButtonGroup size="lg" className="fixed-bottom">
            <Button onClick={() => dispatch(setProgressPeriodWeekly())}>
              <ButtonLabel>Past Week</ButtonLabel>
            </Button>
            <Button onClick={() => dispatch(setProgressPeriodMonthly())}>
              <ButtonLabel>Past Month</ButtonLabel>
            </Button>
            <Button onClick={() => dispatch(setProgressPeriodQuarterly())}>
              <ButtonLabel>Past 3 Months</ButtonLabel>
            </Button>
            <Button onClick={() => dispatch(setProgressPeriodBiannual())}>
              <ButtonLabel>Past 6 Months</ButtonLabel>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

const TabHeader = styled(H3)`
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

const ButtonLabel = styled(H4)`
  margin: 3px 0;
  padding: 0;
`;

const NavItem = styled(BS_NavItem)`
  width: 50%;
`;

const ButtonGroup = styled(BS_ButtonGroup)`
  margin-bottom: 60px;
  width: calc(100% - 30px);
  left: 15px;
`;

const Button = styled(BS_Button)`
  background-color: ${theme.color.light};
  color: black;
`;

export default ProgressReports;
