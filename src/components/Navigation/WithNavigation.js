import React from "react";
import styled from "styled-components";
import {
  Navbar as BS_NavBar,
  NavbarBrand as BS_NavbarBrand,
  Button as BS_Button
} from "reactstrap";
import { withRouter } from "react-router-dom";
import { BackSVG } from "../Global/icons";
import theme from "../Global/theme";

function WithNavigation({ history, pageTitle, children }) {
  return (
    <div>
      <TopNavbar bgColor="white" className="fixed-top">
        <Button onClick={() => history.goBack()}>
          <BackSVG />
        </Button>
        <NavbarBrand style={{ marginLeft: "10px" }}>{pageTitle}</NavbarBrand>
      </TopNavbar>
      <div>{children}</div>
      <BottomNavBar className="fixed-bottom" bgColor="black"></BottomNavBar>
    </div>
  );
}

const TopNavbar = styled(BS_NavBar)`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : theme.light)};
  height: 50px;

  display: flex;
  justify-content: flex-start;
`;

const BottomNavBar = styled(BS_NavBar)`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : theme.light)};
  height: 50px;

  display: flex;
  justify-content: space-between;
`;

const NavbarBrand = styled(BS_NavbarBrand)`
  font-size: 1.6rem;
  font-weight: bold;
`;

const Button = styled(BS_Button)`
  background-color: white;
  border: none;
`;

export default withRouter(WithNavigation);
