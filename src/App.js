import React from "react";

// importing from global styles
import { AppWrapper } from "./components/Global/globalStyles";

// Set up routes
import { Route } from "react-router-dom";

import Auth from "./components/Auth/Auth";

function App() {
  return (
    <AppWrapper>
      <Route path="/" exact component={Auth} />
    </AppWrapper>
  );
}

export default App;
