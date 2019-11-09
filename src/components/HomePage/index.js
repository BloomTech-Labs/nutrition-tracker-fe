import React from "react";

import styled from "styled-components";
import { Button } from "../Global";

const HomePage = () => {
  return (
    <Container direction="column">
      <div style={{ height: "50px" }}></div>
      <h1>Hello, world!</h1>
      <Button>Sign out</Button>
    </Container>
  );
};

const Container = styled(BS_Container)`
  height: 100vh;
`;

export default HomePage;
