// react hooks doc https://reactjs.org/docs/hooks-intro.html
import React, { useEffect, useState } from "react";

import app from "firebase/app";

// creating and exporting AuthContext
// react context doc https://reactjs.org/docs/context.html
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  // sets state for current user once logged in
  const [currentUser, setCurrentUser] = useState(null);

  // (componentDidMount) mounts current user
  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    // creates context for current user and passes that state down to children components
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
