import React from "react";

// importing from global styles
import { AppWrapper } from "./components/Global";

// Set up routes
import { Route } from "react-router-dom";

// importing component pages for routes
import HomePage from "./components/HomePage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

function App() {
  return (
    <AppWrapper>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </AppWrapper>
  );
}

export default App;
