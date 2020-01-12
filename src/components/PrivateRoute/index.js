// hooks doc https://reactjs.org/docs/hooks-intro.html
import React, { useState } from "react";
// Using useSelector to grab token from firebase reducer
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import Loading from "../Global/Loading";
import LandingPage from "../LandingPage";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [token, setToken] = useState("");
  // using useSelector to await the token to mount then assigning that to our token variable
  // when the page re-renders or refreshes all of the firebase data refreshes as well
  // using async await here makes sure nothing funny happens when we refresh the page
  useSelector(
    async state =>
      (await state.firebase.auth.stsTokenManager) &&
      state.firebase.auth.stsTokenManager.accessToken
  ).then(res => setToken(res));

  const loaded = useSelector(state => state.firebase.profile.isLoaded);

  return (
    <Route
      {...rest}
      render={routeProps => {
        // if use is logged in, send them to private route, else send them to the landing page to log in
        return token ? (
          <RouteComponent {...routeProps} />
        ) : loaded && !token ? (
          <LandingPage />
        ) : (
          <Loading />
        );
      }}
    />
  );
};

export default PrivateRoute;
