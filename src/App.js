import React from "react";

// importing from global styles
import { AppWrapper } from "./components/Global";

// Set up routes
import { Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// importing component pages for routes
import HomePage from "./components/HomePage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import FoodItem from "./components/FoodItem";
import Onboarding from "./components/Onboarding";
import Loading from "./components/Global/Loading"; // DELETE ME WHEN THE LOADING HOC IS READY TO IMPLEMENT

library.add(faSearch);

function App() {
  return (
    <AppWrapper>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/onboarding" exact component={Onboarding} />
      <Route path="/register" exact component={Register} />
      <Route path="/food_item" component={FoodItem} />
      <Route path="/loading" component ={Loading}/> {/*DELETE ME WHEN THE LOADING HOC IS READY TO IMPLEMENT*/}
    </AppWrapper>
  );
}

export default App;
