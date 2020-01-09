import React from "react";
import {
  Navbar as BS_NavBar,
  NavItem as BS_NavItem,
  NavLink
} from "reactstrap";
import styled from "styled-components";
import {
  DailyLogSVG,
  ProgressSVG,
  RecipeSVG,
  SettingsSVG
} from "../../Global/icons";
import theme from "../../Global/theme";

const BottomNav = ({ displayNav }) => {
  return (
    <NavContainer displayNav={displayNav}>
      <NavBar>
        <NavItem>
          <NavLink href="/daily-log">
            <DailyLogSVG />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/recipes">
            <RecipeSVG />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/reports">
            <ProgressSVG />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/settings">
            <SettingsSVG />
          </NavLink>
        </NavItem>
      </NavBar>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: ${props => (props.displayNav ? "block" : "none")};
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const NavBar = styled(BS_NavBar)`
  ${theme.mixin.flex("row", "space-between", "center")};
  height: 50px;
  padding: 0;
  background-color: black;
`;

const NavItem = styled(BS_NavItem)`
  ${theme.mixin.flex("row", "center", "center")};

  width: 25%;
  height: 100%;
`;

export default BottomNav;
