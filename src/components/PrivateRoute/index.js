// hooks doc https://reactjs.org/docs/hooks-intro.html
import React from "react";

import { useSelector } from "react-redux";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const token = useSelector(
    async state =>
      (await state.firebase.auth.stsTokenManager) &&
      state.firebase.auth.stsTokenManager.accessToken
  );

  return (
    <Route
      {...rest}
      render={routeProps =>
        token ? <RouteComponent {...routeProps} /> : <Redirect to="/landing" />
      }
    />
  );
};

export default PrivateRoute;
