import React, { Component } from "react";
import { Link } from "react-router-dom";

import defaultUserImage from "../../default-user-pic.jpeg";

import { logout } from "../../store/actions/firebaseAuth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import styled from "styled-components";
import { PillButton, Container } from "../Global/styled";

import Loading from "../Global/loading";

class DailyLog extends Component {
  // Offers the user a way out, a chance at a better life
  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    // Destructing props like a karate chop
    const { user, pictureURL, loading, token } = this.props;

    // If data is not there but user is logged in, returns a loading screen
    if (loading) return <Loading />;

    // If token isn't there then the user isn't logged in and send them back to wince they came
    if (!token) return <Redirect to="/landing" />;

    // This is just placeholder till Daily log gets built out
    return (
      <Container height={this.props.height} align="center">
        {user ? (
          <Header>Hello, {user}!</Header>
        ) : (
          <Header>Welcome to NutriJournal</Header>
        )}
        <ProfilePic
          src={pictureURL ? pictureURL : defaultUserImage}
          alt="user pic"
        />
        <div>
          <PillButton color="secondary" onClick={this.handleLogout}>
            Sign out
          </PillButton>
        </div>
        <Link to="/settings">Settings</Link>
      </Container>
    );
  }
}

const Header = styled.h2`
  margin-top: 2rem;
`;

const ProfilePic = styled.img`
  width: 100px;
  margin-bottom: 40px;
  border-radius: 50px;
`;

const mapStateToProps = state => {
  return {
    user: state.firebase.auth && state.firebase.auth.displayName,
    pictureURL: state.firebase.auth.photoURL,
    loading: !state.firebase.auth.isLoaded,
    token:
      state.firebase.auth &&
      state.firebase.auth.stsTokenManager &&
      state.firebase.auth.stsTokenManager.accessToken
  };
};

export default connect(mapStateToProps, { logout })(DailyLog);
