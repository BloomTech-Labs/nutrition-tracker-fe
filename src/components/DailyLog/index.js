import React, { Component } from "react";

import defaultUserImage from "../../default-user-pic.jpeg";

import { logout } from "../../store/actions/firebaseAuth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import styled from "styled-components";
import { Button } from "../Global/styled";

import Loading from "../Global/Loading";

class DailyLog extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    const { user, pictureURL, loading, token } = this.props;
    if (loading) return <Loading />;

    if (!token) return <Redirect to="/landing" />;
    return (
      <HomeWrapper>
        {user ? <h2>Hello, {user}!</h2> : <h2>Welcome to NutriJournal</h2>}
        <ProfilePic
          src={pictureURL ? pictureURL : defaultUserImage}
          alt="user pic"
        />
        <div>
          <Button onClick={this.handleLogout}>Sign out</Button>
        </div>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 0;
  }
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

export default connect(
  mapStateToProps,
  { logout }
)(DailyLog);
