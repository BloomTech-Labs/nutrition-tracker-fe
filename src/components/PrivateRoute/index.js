// hooks doc https://reactjs.org/docs/hooks-intro.html
import React from "react";

// Using useSelector to grab token from firebase reducer
import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  // using useSelector to await the token to mount then assigning that to our token variable
  // when the page rerenders or refreshes all of the firebase data refreshes as well
  // using async await here makes sure nothing funny happens when we refresh the page
  const token = useSelector(
    async state =>
      (await state.firebase.auth.stsTokenManager) &&
      state.firebase.auth.stsTokenManager.accessToken
  );

  return (
    <Route
      {...rest}
      render={routeProps =>
        // if use is logged in, send them to private route, else send them to the landing page to log in
        token ? <RouteComponent {...routeProps} /> : <Redirect to="/landing" />
      }
    />
  );
};

export default PrivateRoute;
