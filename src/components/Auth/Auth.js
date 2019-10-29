import React from "react";
import styled from "styled-components";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

const Auth = () => {
  return (
    <AuthWrapper>
      <h1>Hello, world!</h1>
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  h1 {
    margin-top: 0;
  }
`;

export default Auth;
