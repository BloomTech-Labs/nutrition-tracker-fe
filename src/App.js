import React, { Component } from "react";

// importing from global styles
import { AppWrapper } from "./components/Global/styled";

// Set up routes
import { Route } from "react-router-dom";
import withNavigation from "./components/Navigation/withNavigation";

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

import { ToastProvider } from "react-toast-notifications";

library.add(faSearch);

const DailyLogWithNav = withNavigation({
  displayTop: false
})(DailyLog);

const SettingsWithNav = withNavigation({
  pageTitle: "Settings"
})(Settings);

const OnboardingWithNav = withNavigation({
  iconColor: "black",
  topNavColor: "white",
  displayBottom: false
})(Onboarding);

const LoginWithNav = withNavigation({
  iconColor: "black",
  topNavColor: "white",
  displayBottom: false
})(Login);

const RegisterWithNav = withNavigation({
  iconColor: "black",
  topNavColor: "white",
  displayBottom: false
})(Register);

const FoodItemWithNav = withNavigation({
  pageTitle: "Food Item"
})(FoodItem);

class App extends Component {
  render() {
    return (
      <ToastProvider number="5000">
        <AppWrapper>
          <PrivateRoute exact path="/" component={DailyLogWithNav} />
          <Route path="/landing" component={LandingPage} />
          <Route path="/login" component={LoginWithNav} />
          <Route path="/register" component={RegisterWithNav} />
          <Route path="/onboarding" component={OnboardingWithNav} />
          <Route path="/food-item" component={FoodItemWithNav} />
          <Route path="/settings" component={SettingsWithNav} />
        </AppWrapper>
      </ToastProvider>
    );
  }
}

export default App;
