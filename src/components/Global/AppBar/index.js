import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import styled from "styled-components";
import { DailyLogIcon } from "../../Global/icons";

class AppBar extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <NavItem>
            <DailyLogIcon />
            <NavLink href="#">Daily Log</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Recipes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Reports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Settings</NavLink>
          </NavItem>
        </Nav>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: center
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default AppBar;
