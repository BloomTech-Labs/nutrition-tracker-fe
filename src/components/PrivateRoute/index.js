// hooks doc https://reactjs.org/docs/hooks-intro.html
import React, { useContext } from "react";

import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  // setting current user context (useContext for now, this needs to be moved to redux)
  const { currentUser } = useContext(AuthContext);

  console.log("Current user:", currentUser && currentUser.displayName);
  return (
    <Route
      {...rest}
      render={routeProps =>
        currentUser ? <RouteComponent {...routeProps} /> : <Redirect to={"/"} />
      }
    />
  );
};

export default PrivateRoute;
