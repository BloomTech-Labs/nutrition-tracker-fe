import React from "react";

import { Route, useHistory, Switch } from "react-router-dom";

import WeeklyMacros from "./macro-views/WeeklyMacros";
import MonthlyMacros from "./macro-views/MonthlyMacros";
import QuarterlyMacros from "./macro-views/QuarterlyMacros";
import BiannualMacros from "./macro-views/BiannualMacros";

import styled from "styled-components";

const Macros = () => {
  const location = useHistory();
  console.log("DUDE WHERES MY CAR?!?!?!", location);
  return (
    <MacroWrapper>
      <Switch>
        <Route exact path="/progress-reports/" component={WeeklyMacros} />
        <Route path="/progress-reports/monthly" component={MonthlyMacros} />
        <Route path="/progress-reports/quarterly" component={QuarterlyMacros} />
        <Route path="/progress-reports/biannual" component={BiannualMacros} />
      </Switch>
    </MacroWrapper>
  );
};

const MacroWrapper = styled.div`
  margin-bottom: 8rem;
`;

export default Macros;
