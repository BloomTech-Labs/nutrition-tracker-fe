import React, { Component } from "react";
// Set up routes
import { Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// importing component pages for routes
import DailyLog from "./components/DailyLog";
import FoodItem from "./components/FoodItem";
// importing from global styles
import { AppWrapper } from "./components/Global/styled";
import LandingPage from "./components/LandingPage";
import withNavigation from "./components/Navigation/withNavigation";
import Onboarding from "./components/Onboarding";
// setting up private route to make sure only authenticated users are in our home page
import PrivateRoute from "./components/PrivateRoute";
import ProgressReports from "./components/ProgressReports";
import Settings from "./components/Settings";

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

const ProgressReportsWithNav = withNavigation({
  pageTitle: "Progress Reports"
})(ProgressReports);

class App extends Component {
  render() {
    return (
      <ToastProvider number="5000">
        <AppWrapper>
          <Route exact path="/" component={LandingPage} />
          <PrivateRoute path="/daily-log" component={DailyLogWithNav} />
          <Route path="/login" component={LoginWithNav} />
          <Route path="/register" component={RegisterWithNav} />
          <Route path="/onboarding" component={OnboardingWithNav} />
          <PrivateRoute path="/food-item" component={FoodItemWithNav} />
          <PrivateRoute path="/settings" component={SettingsWithNav} />
          <Route path="/progress-reports" component={ProgressReportsWithNav} />
        </AppWrapper>
      </ToastProvider>
    );
  }
}

export default App;
