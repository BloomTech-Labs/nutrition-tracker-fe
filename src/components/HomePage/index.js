import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import app from "firebase/app";

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Hello, world!</h1>
      <Button onClick={() => app.auth().signOut()}>Sign out</Button>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  h1 {
    margin-top: 0;
  }
`;

export default HomePage;
