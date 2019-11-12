import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { ListGroup, ListGroupItem } from "reactstrap";
import Height from "./components/height";
import Dob from "./components/dob";
import CurrentWeight from "./components/current_weight";
import TopBar from "./TopBar";

class Settings extends React.Component {
  render() {
    return (
      <Container>
        <TopBar />
        <ListGroup>
          <ListGroupItem style={HeadingStyle}>Profile</ListGroupItem>
          <Height />
          <CurrentWeight />
          <Dob />
          <ListGroupItem style={ListStyle}>
            <div>Gender</div>
            <div>Male</div>
          </ListGroupItem>
          <ListGroupItem style={ListStyle}>
            <div>Activity Level</div>
            <div>Sedentary</div>
          </ListGroupItem>
          <ListGroupItem style={HeadingStyle}>Nutrition</ListGroupItem>
          <ListGroupItem style={ListStyle}>Macronutrient Targets</ListGroupItem>
          <ListGroupItem style={ListStyle}>Weight Goal</ListGroupItem>
          <ListGroupItem style={HeadingStyle}>Account Settings</ListGroupItem>
          <ListGroupItem style={ListStyle}>Logout</ListGroupItem>
          <ListGroupItem style={ListStyle}>Email</ListGroupItem>
          <ListGroupItem style={ListStyle}>Password</ListGroupItem>
        </ListGroup>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ListStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Segoe UI",
  color: "#212529",
  fontSize: "16px",
  lineHeight: "24px"
};
const HeadingStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontFamily: "Segoe UI",
  color: "#000000",
  fontSize: "16px",
  background: "rgba(0, 0, 0, 0.03)",
  border: "1px solid rgba(0, 0, 0, 0.125)",
  fontWeight: "bold"
};

export default Settings;
