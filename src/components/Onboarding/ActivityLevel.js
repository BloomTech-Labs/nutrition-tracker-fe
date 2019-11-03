import React from "react";
import { Button, Header } from "./styles";

const ActivityLevel = props => {
  return (
    <div>
      <Header>How active are you?</Header>
      <>
        <Button outline color="primary" width="80%">
          Sedentary
        </Button>
        <Button outline color="primary">
          Light
        </Button>
        <Button outline color="primary">
          Moderate
        </Button>
        <Button outline color="primary">
          Very
        </Button>
        <Button outline color="primary">
          Extra
        </Button>
      </>
    </div>
  );
};

export default ActivityLevel;
