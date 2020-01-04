import React from "react";

import { Route, Switch } from "react-router-dom";

import WeeklyMacros from "./macro-views/WeeklyMacros";
import MonthlyMacros from "./macro-views/MonthlyMacros";
import QuarterlyMacros from "./macro-views/QuarterlyMacros";
import BiannualMacros from "./macro-views/BiannualMacros";

import styled from "styled-components";

const Macros = () => {
  return (
    <MacroWrapper>
      <Switch>
        <Route
          exact
          path="/progress-reports/:period"
          component={WeeklyMacros}
        />
        <Route path="/progress-reports/:period" component={MonthlyMacros} />
        <Route path="/progress-reports/:period" component={QuarterlyMacros} />
        <Route path="/progress-reports/:period" component={BiannualMacros} />
      </Switch>
    </MacroWrapper>
  );
};

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;

export default Macros;
