import React from "react";

// importing from global styles
import { AppWrapper } from "./components/Global";

// Set up routes
import { Route } from "react-router-dom";

// import Auth from "./components/Auth/Auth";
import HomePage from "./components/HomePage";
import SignIn from "./components/Auth/SignIn";
import Register from "./components/Auth/Register";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/Auth";

function App() {
  return (
    <AuthProvider>
      <AppWrapper>
        <PrivateRoute path="/" exact component={HomePage} />
        <Route path="/login" exact component={SignIn} />
        <Route path="/register" exact component={Register} />
      </AppWrapper>
    </AuthProvider>
  );
}

export default App;
