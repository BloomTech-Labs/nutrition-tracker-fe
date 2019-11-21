import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {getUserInfo} from "../../store/actions/updateUserSettings";
import { ListGroup, ListGroupItem } from "reactstrap";
import Height from "./components/height";
import Dob from "./components/dob";
import Email from "./components/email";
import Password from "./components/password";
import Gender from "./components/gender";
import ActivityLevel from "./components/activity_level";
import CurrentWeight from "./components/current_weight";
import TopBar from "./TopBar";

class Settings extends React.Component {
  state = {
    user_info: {
      firebase_id: "",
      email: "",
      height_cm: "",
      sex: "male",
      dob: "",
      height: {
        feet: "",
        inches: ""
      }
    }
  };

  componentDidMount() {
    const id = 1;

    const user = this.props.getUserInfo(id);
    console.log(user)

    this.setState({
      user_info: {
        firebase_id: user.firebase_id,
        email: user.email,
        height_cm: user.height_cm,
        sex: user.sex,
        dob: user.dob,
        height: {
          feet: user.height.feet,
          inches: user.height.inches
        }
      }
    });
  }

  render() {
    return (
      <Container>
        <TopBar />
        <ListGroup>
          <ListGroupItem style={HeadingStyle}>Profile</ListGroupItem>
          <Height data={this.state.user_info.height} />
          <CurrentWeight data={this.state.user_info.weight} />
          <Dob data={this.state.user_info.dob} />
          <Gender data={this.state.user_info.gender} />
          <ActivityLevel  />
          <ListGroupItem style={HeadingStyle}>Nutrition</ListGroupItem>
          <ListGroupItem style={ListStyle}>
            MacroNutrient Targets{" "}
          </ListGroupItem>
          <ListGroupItem style={ListStyle}>Weight Goal</ListGroupItem>
          <ListGroupItem style={HeadingStyle}>Account Settings</ListGroupItem>
          <ListGroupItem style={ListStyle}>Logout</ListGroupItem>
          <Email data={this.state.user_info.email} />
          <Password  />
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

const mapStateToProps = state => ({
  userInfo: state.userInfo
});

export default connect(mapStateToProps, { getUserInfo })(Settings);
