import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// normalize.css
import "normalize.css";

// Set up Redux and Router
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// Set up redux middleware and root reducer
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import logger from "redux-logger";

import App from "./App";

// Save this puppy for later!
import * as serviceWorker from "./serviceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
