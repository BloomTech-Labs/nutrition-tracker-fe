import "./index.css";
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// normalize.css
import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
// Set up Redux, Router and Firebase's react-redux
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { createFirestoreInstance } from "redux-firestore";
import logger from "redux-logger";
import thunk from "redux-thunk";
import App from "./App";
import firebase from "./config/firebase";
// Save this puppy for later!
import * as serviceWorker from "./serviceWorker";
// Set up redux middleware and root reducer
import rootReducer from "./store/reducers";

// create our redux store and apply our middleware
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const reactReduxFirebaseConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true
};

const reactReduxFirebaseProps = {
  firebase,
  config: reactReduxFirebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

// wrap app with router and redux provider
ReactDOM.render(
  // our redux provider wraps our firebase's react-redux provide which wraps our Router and then App
  <Provider store={store}>
   <ReactReduxFirebaseProvider {...reactReduxFirebaseProps}> 
      <Router>
        <App />
      </Router>
   </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
