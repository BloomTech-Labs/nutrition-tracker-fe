import React from "react";
import { connect } from "react-redux";
import { Container } from "../Global/styled";
import {ListStyle, HeadingStyle} from "./styles";
import {getUserInfo, updateUserInfo, getCurrentWeight} from "../../store/actions/settingsActions";
import {ListGroup, ListGroupItem } from "reactstrap";
import Height from "./components/Height";
import Dob from "./components/Dob";
import Email from "./components/Email";
import Password from "./components/Password";
import Gender from "./components/Gender";
import ActivityLevel from "./components/ActivityLevel";
import CurrentWeight from "./components/CurrentWeight";

class Settings extends React.Component {

  componentDidMount() {
    const id = 1
    //Calls action to get specific user.
    this.props.getUserInfo(id);
    //Calls action to get users current weight.
    this.props.getCurrentWeight(id);
  }

  updateUser = (update) => {
    this.props.updateUserInfo(update)
  } 

  updateWeight = (update) => {
    this.props.getCurrentWeight(update)
  } 

  render() {
    return (
      <Container height={this.props.height} fluid>
        <ListGroup>
          <ListGroupItem style={HeadingStyle}>Profile</ListGroupItem>
          <Height updateUser={this.updateUser} data={this.props.userInfo} />
          <CurrentWeight updateWeight={this.updateWeight} data={this.props.userInfo} />
          <Dob updateUser={this.updateUser} data={this.props.userInfo} />
          <Gender updateUser={this.updateUser} data={this.props.userInfo} />
          <ActivityLevel  />
          <ListGroupItem style={HeadingStyle}>Nutrition</ListGroupItem>
          <ListGroupItem style={ListStyle}>
            MacroNutrient Targets
          </ListGroupItem>
          <ListGroupItem style={ListStyle}>Weight Goal</ListGroupItem>
          <ListGroupItem style={HeadingStyle}>Account Settings</ListGroupItem>
          <ListGroupItem style={ListStyle}>Logout</ListGroupItem>
          <Email updateUser={this.updateUser} data={this.props.userInfo} />
          <Password  />
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return{
    userInfo: state.updateUserInfo
  }
};

export default connect(mapStateToProps, { getUserInfo, updateUserInfo, getCurrentWeight })(Settings);
