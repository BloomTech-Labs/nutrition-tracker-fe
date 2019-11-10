import firebase from "../../config/firebase";

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

export const login = (email, password) => dispatch => {
  dispatch({ type: "LOGIN_START" });
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => {
      dispatch({ type: "LOGIN_SUCCESS" });
      console.log("Login response:", res);
    })
    .catch(err => {
      dispatch({ type: "LOGIN_ERROR", payload: err.message });
      alert(err.message);
    });
};

export const register = (name, email, password) => dispatch => {
  dispatch({ type: "REGISTER_START" });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log(name);
      return firebase.auth().currentUser.updateProfile({
        displayName: name
      });
    })
    .then(() => {
      dispatch({ type: "REGISTER_SUCCESS" });
    })
    .catch(err => {
      dispatch({ type: "REGISTER_ERROR", payload: err.message });
      alert(err.message);
    });
};

export const logout = () => dispatch => {
  dispatch({ type: "LOGOUT_START" });
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "LOGOUT_SUCCESS" });
    })
    .catch(err => {
      dispatch({ type: "LOGOUT_ERROR", payload: err.message });
      alert(err.message);
    });
};

export const googleLogin = () => dispatch => {
  dispatch({ type: "GOOGLE_LOGIN_START" });
  firebase
    .auth()
    .signInWithRedirect(googleProvider)
    .then(res => {
      // google login response
      console.log("Google response:", res);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = res.credential.accessToken;
      console.log("Token:", token);
      // The signed-in user info.
      const user = res.user.displayName;
      const userPicture = res.additionalUserInfo.profile.picture;
      console.log("User:", user);
      console.log("Picture:", userPicture);
      // ...
      dispatch({ type: "GOOGLE_LOGIN_SUCCESS", payload: token });
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      console.log("Error code:", errorCode);
      const errorMessage = error.message;
      console.log("Error message:", errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log("email:", email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log("Credential:", credential);
      // ...
      dispatch({ type: "GOOGLE_LOGIN_FAILURE" });
    });
};

export const facebookLogin = () => dispatch => {
  dispatch({ type: "FACEBOOK_LOGIN_START" });
  firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then(res => {
      // facebook login response
      console.log("Facebook response:", res);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = res.credential.accessToken;
      console.log("Token:", token);
      // The signed-in user info.
      const user = res.user;
      console.log("User:", user);
      // ...
      dispatch({ type: "FACEBOOK_LOGIN_SUCCESS" });
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      console.log("Error code:", errorCode);
      const errorMessage = error.message;
      console.log("Error message:", errorMessage);
      // The email of the user's account used.
      const email = error.email;
      console.log("email:", email);
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      console.log("Credential:", credential);
      // ...
      dispatch({ type: "FACEBOOK_LOGIN_FAILURE" });
    });
};
