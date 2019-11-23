import React, { Component } from "react";

// importing from global styles
import { AppWrapper } from "./components/Global/styled";

// Set up routes
import { Route } from "react-router-dom";
import withNavigation from "./components/Navigation/withNavigation"

// importing component pages for routes
import DailyLog from "./components/DailyLog";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Onboarding from "./components/Onboarding";

// setting up private route to make sure only authenticated users are in our home page
import PrivateRoute from "./components/PrivateRoute";
// import RequireAuth from "./components/Auth";

const DailyLogWithNav = withNavigation({
  displayTop: false
})(DailyLog);

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <PrivateRoute exact path="/" component={DailyLogWithNav} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/onboarding" component={Onboarding} />
      </AppWrapper>
    );
  }
}

export default App;
