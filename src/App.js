import React, { useState, useEffect } from "react";

// importing from global styles
import { AppWrapper } from "./components/Global";

// Set up routes
import { Route } from "react-router-dom";

// importing component pages for routes
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// setting up private route to make sure only authenticated users are in our home page
import PrivateRoute from "./components/PrivateRoute";

//
import { AuthProvider } from "./components/Auth";

import firebase from "./components/firebase";

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);

  useEffect(() => {
    firebase.isInitialized().then(bool => {
      setFirebaseInitialized(bool);
    });
  });
  return firebaseInitialized !== false ? (
    // AuthProvider provides current user to all children of app
    // current user state needs to be added to redux instead
    <AuthProvider>
      <AppWrapper>
        <Route path="/" exact component={LandingPage} />
        <PrivateRoute path="/home" exact component={HomePage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </AppWrapper>
    </AuthProvider>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
