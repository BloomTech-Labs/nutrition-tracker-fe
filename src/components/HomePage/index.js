import React, { useContext } from "react";

import firebaseConfig from "../firebase";

import { Redirect } from "react-router-dom";

import styled from "styled-components";
import { Button } from "../Global";

// import { AuthContext } from "../Auth";

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Hello, world!</h1>
      <Button
        onClick={() =>
          firebaseConfig
            .auth()
            .signOut()
            .then(() => <Redirect to="/" />)
        }
      >
        Sign out
      </Button>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 0;
  }

  button {
    width: 40%;
  }
`;

export default HomePage;
