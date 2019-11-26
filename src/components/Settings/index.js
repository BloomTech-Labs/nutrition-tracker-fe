import React from "react";
import styled from "styled-components"
import { connect } from "react-redux";
import { Container as Global_Container} from "../Global/styled";
import {ListStyle, HeadingStyle} from "./styles";
import {getUserInfo, updateUserInfo} from "../../store/actions/updateUserSettings";
import { ListGroup, ListGroupItem } from "reactstrap";
import Height from "./components/height";
import Dob from "./components/dob";
import Email from "./components/email";
import Password from "./components/password";
import Gender from "./components/gender";
import ActivityLevel from "./components/activity_level";
import CurrentWeight from "./components/current_weight";

class Settings extends React.Component {

  componentDidMount() {
    const id = 1
    //Calls action to get specific user
    this.props.getUserInfo(id);
  }

  updateUser = (update) => {
    this.props.updateUserInfo(update)
  } 

  render() {
    console.log(this.user)
    return (
      <Container fluid={false} height={this.props.height}>
        <ListGroup>
          <ListGroupItem style={HeadingStyle}>Profile</ListGroupItem>
          <Height updateUser={this.updateUser} data={this.props.userInfo} />
          <CurrentWeight data={this.props.userInfo} />
          <Dob data={this.props.userInfo} />
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

const Container = styled(Global_Container)`
  padding: 0;
`;

const mapStateToProps = state => {
  return{
    userInfo: state.updateUserInfo // ?????
  }
};

export default connect(mapStateToProps, { getUserInfo, updateUserInfo })(Settings);
