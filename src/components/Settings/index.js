import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import { ListGroup, ListGroupItem } from 'reactstrap';
import TopBar from "./TopBar"


class Settings extends React.Component {
  render() {

    return (
		<Container>
		<TopBar />
		<ListGroup>
			<ListGroupItem>Profile</ListGroupItem>
			<ListGroupItem>Height</ListGroupItem>
			<ListGroupItem>Current Weight</ListGroupItem>
			<ListGroupItem>Date Of Birth</ListGroupItem>
			<ListGroupItem>Gender</ListGroupItem>
			<ListGroupItem>Activity Level</ListGroupItem>
			<ListGroupItem>Nutrition</ListGroupItem>
			<ListGroupItem>Macronutrient Targets</ListGroupItem>
			<ListGroupItem>Weight Goal</ListGroupItem>
			<ListGroupItem>Account Settings</ListGroupItem>
			<ListGroupItem>Logout</ListGroupItem>
			<ListGroupItem>Email</ListGroupItem>
			<ListGroupItem>Password</ListGroupItem>
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

export default Settings;