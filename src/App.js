import React, { Component } from "react";

// importing from global styles
import { AppWrapper } from "./components/Global/styled";

// Set up routes
import { Route } from "react-router-dom";

// importing component pages for routes
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// setting up private route to make sure only authenticated users are in our home page
import PrivateRoute from "./components/PrivateRoute";
// import RequireAuth from "./components/Auth";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Route path="/landing" exact component={LandingPage} />
        <PrivateRoute path="/" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </AppWrapper>
    );
  }
}

export default App;
