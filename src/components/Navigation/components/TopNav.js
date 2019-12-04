import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {
  Navbar as BS_NavBar,
  NavbarBrand as BS_NavbarBrand,
  Button as BS_Button
} from "reactstrap";
import { BackSVG } from "../../Global/icons";
import theme from "../../Global/theme";

const TopNav = props => {
  const {
    pageTitle,
    titleColor,
    topNavColor,
    buttonColor,
    iconColor,
    displayNav,
    history
  } = props;

  return (
    <NavContainer displayNav={displayNav}>
      <Navbar topnavcolor={topNavColor}>
        <Button buttoncolor={buttonColor} onClick={() => history.goBack()}>
          <BackSVG fill={iconColor} />
        </Button>
        <NavbarBrand titlecolor={titleColor}>
          {pageTitle}
        </NavbarBrand>
      </Navbar>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  display: ${props => (props.displayNav ? "block" : "none")};
`;

const Navbar = styled(BS_NavBar)`
  ${theme.mixin.flex("row", "flex-start", "center")};

  height: 50px;
  padding: 0 3px;

  background-color: ${props => props.topnavcolor};
`;

const Button = styled(BS_Button)`
  border: none;
  background-color: ${props => props.buttoncolor};
`;

const NavbarBrand = styled(BS_NavbarBrand)`
  margin-left: 10px;
  color: ${props => props.titleColor} !important;
  font-size: 1.6rem;
`;

export default withRouter(TopNav);
