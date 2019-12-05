import React, { Component } from "react";

// importing from global styles
import { AppWrapper } from "./components/Global/styled";

// Set up routes
import { Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// importing component pages for routes
import DailyLog from "./components/DailyLog";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import FoodItem from "./components/FoodItem";
import Onboarding from "./components/Onboarding";
import Settings from "./components/Settings";

// setting up private route to make sure only authenticated users are in our home page
import PrivateRoute from "./components/PrivateRoute";
// import RequireAuth from "./components/Auth";

import withNavigation from "./components/Navigation/withNavigation";

// TODO: Fix ToastProvider

// imports for toast wrapper 
// import { ToastProvider } from "react-toast-notifications";

library.add(faSearch);

const SettingsWithNav = withNavigation({
  pageTitle: "Settings"
})(Settings);


class App extends Component {
  render() {
    return (
      //<ToastProvider number="5000"> 
        <AppWrapper>
          <PrivateRoute exact path="/" component={DailyLog} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/onboarding" component={Onboarding} />
          <Route path="/food_item" component={FoodItem} />
          <PrivateRoute path="/settings" component={SettingsWithNav} />
        </AppWrapper>
      //</ToastProvider>
    );
  }
}

export default App;
