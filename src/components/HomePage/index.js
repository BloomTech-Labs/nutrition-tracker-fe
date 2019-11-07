import React from "react";

import styled from "styled-components";
import { Button } from "../Global/styled";

const HomePage = () => {
  return (
    <HomeWrapper>
      <h1>Hello, world!</h1>
      <Button>Sign out</Button>
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
