import React from "react";

// importing from global styles
import { AppWrapper } from "./components/Global";

// Set up routes
import { Route } from "react-router-dom";

// importing component pages for routes
import HomePage from "./components/HomePage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

// imports for toast wrapper 
import { ToastProvider } from "react-toast-notifications";

// imports for flywheel testing and example use
import Flywheel from "./components/Global/flywheel-menu/Flywheel";
import {
  faAppleAlt,
  faUtensils,
  faWeight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

  let childButtonIcons = [ 
    {
      icon: faAppleAlt,
      name: "Food",
      isaLink: true,
      linkPath: "/login"
    },
    { icon: faUtensils, name: "Recipe", isaLink: false },
    { icon: faWeight, name: "Weight", isaLink: false }
  ];

function App() {
  return (
    <ToastProvider number="5000"> 
    <AppWrapper>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />

      <Flywheel maintButtonIcon={faTimes} childButtonIcons={childButtonIcons}/>
    </AppWrapper>
    </ToastProvider>
  );
}

export default App;
