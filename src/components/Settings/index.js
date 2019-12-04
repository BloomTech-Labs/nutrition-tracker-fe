import React from "react";
import { connect } from "react-redux";
import { Container } from "../Global/styled";
import { ListStyle, HeadingStyle } from "./styles";
import {
  getUserInfo,
  updateUserInfo,
  getCurrentWeight,
  updateCurrentWeight,
  getActivityLevel,
  updateActivityLevel,
  getWeightGoal,
  updateWeightGoal,
  getMacros,
  updateMacros
} from "../../store/actions/settingsActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import Height from "./components/Height";
import Dob from "./components/Dob";
import Email from "./components/Email";
//import Password from "./components/Password"; For RC2
import Gender from "./components/Gender";
import ActivityLevel from "./components/ActivityLevel";
import CurrentWeight from "./components/CurrentWeight";

class Settings extends React.Component {
  componentDidMount() {
    //These are actions that gets the current info for settings from DB
    this.props.getUserInfo(this.props.firebaseID);
    this.props.getCurrentWeight(this.props.firebaseID);
    this.props.getActivityLevel(this.props.firebaseID);
    this.props.getMacros(this.props.firebaseID);
    this.props.getWeightGoal(this.props.firebaseID);
  }

  //These are functions that get passed down to the components and updates the DB for that component's data.
  updateUser = update => {
    this.props.updateUserInfo(update, this.props.firebaseID);
  };

  updateWeight = update => {
    this.props.updateCurrentWeight(update, this.props.firebaseID);
  };

  updateActivityLevel = update => {
    this.props.updateActivityLevel(update, this.props.firebaseID);
  };

  updateMacros = update => {
    this.props.updateMacros(update, this.props.firebaseID);
  };

  updateWeightGoal = update => {
    this.props.updateWeightGoal(update, this.props.firebaseID);
  };

  render() {
    return (
      <Container height={this.props.height} fluid>
        <ListGroup>
          <ListGroupItem style={HeadingStyle}>Profile</ListGroupItem>
          <Height updateUser={this.updateUser} data={this.props.userInfo} />
          <CurrentWeight
            updateWeight={this.updateWeight}
            data={this.props.userInfo}
          />
          <Dob updateUser={this.updateUser} data={this.props.userInfo} />
          <Gender updateUser={this.updateUser} data={this.props.userInfo} />
          <ActivityLevel
            updateActivityLevel={this.updateActivityLevel}
            data={this.props.userInfo}
          />
          <ListGroupItem style={HeadingStyle}>Nutrition</ListGroupItem>
          <ListGroupItem style={ListStyle}>MacroNutrient Targets</ListGroupItem>
          <ListGroupItem style={ListStyle}>Weight Goal</ListGroupItem>
          <ListGroupItem style={HeadingStyle}>Account Settings</ListGroupItem>
          <ListGroupItem style={ListStyle}>Logout</ListGroupItem>
          <Email updateUser={this.updateUser} data={this.props.userInfo} />
          {/* <Password /> For RC2*/} 
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.updateUserInfo,
    firebaseID: state.firebase.auth.uid
  };
};

export default connect(mapStateToProps, {
  getUserInfo,
  updateUserInfo,
  getCurrentWeight,
  updateCurrentWeight,
  getActivityLevel,
  updateActivityLevel,
  getWeightGoal,
  updateWeightGoal,
  getMacros,
  updateMacros
})(Settings);
