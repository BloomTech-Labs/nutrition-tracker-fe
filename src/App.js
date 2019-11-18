import React, { Component } from "react";

// importing from global styles
import { AppWrapper } from "./components/Global/styled";

// Set up routes
import { Route } from "react-router-dom";

// importing component pages for routes
import DailyLog from "./components/DailyLog";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Onboarding from "./components/Onboarding";
import WithNavigation from "./components/Navigation/WithNavigation";
// setting up private route to make sure only authenticated users are in our home page
import PrivateRoute from "./components/PrivateRoute";
// import RequireAuth from "./components/Auth";

import AppBar from "../src/components/Global/AppBar";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <PrivateRoute exact path="/" component={DailyLog} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          path="/onboarding"
          render={props => (
            <WithNavigation pageTitle="On Boarding" {...props}>
              <DailyLog {...props} />
            </WithNavigation>
          )}
        />
        <Route
          path="/"
          render={props => (
            <WithNavigation pageTitle="Daily Log" {...props}>
              <Onboarding {...props} />
            </WithNavigation>
          )}
        />
      </AppWrapper>
    );
  }
}

export default App;
