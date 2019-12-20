import axios from "axios";
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

// all register functions (email, google and facebook) take in an onboarding info object
// once we get the response back after the firebase function in the .then we
// create a new user object gluing the user data from the response to the onboarding info and
// creating a new user object out of those two object and sending that new user object to the back end
// to update back end with new user and onboarding info and back end sends everything to the right tables
export const register = (name, email, password, onboardingInfo) => dispatch => {
  dispatch({ type: "REGISTER_START" });
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      const newUser = {
        firebase_id: res.user.uid,
        sex: onboardingInfo.sex,
        activity_level: onboardingInfo.activity_level,
        dob: onboardingInfo.dob,
        actual_weight_kg: onboardingInfo.weight_kg,
        goal_weight_kg: onboardingInfo.target_weight_kg,
        height_cm: onboardingInfo.height_cm,
        goal_weekly_weight_change_rate: onboardingInfo.weekly_goal_rate,
        email: res.user.email
      };
      // a commit
      console.log("New user info:", newUser);
      axios
        .post("https://nutri-journal.herokuapp.com/auth/register", newUser) // { headers: auth }
        .then(response => console.log("Response:", response))
        .catch(err => console.log("Error:", err));
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
    .signInWithPopup(googleProvider)
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
      dispatch({ type: "GOOGLE_LOGIN_SUCCESS" });
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

export const googleRegister = onboardingInfo => dispatch => {
  dispatch({ type: "GOOGLE_REGISTER_START" });
  firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res => {
      // google login response
      console.log("Google response:", res);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = res.credential.accessToken;
      console.log("Token:", token);
      // const auth = { Authorization: `Bearer: ${token}` };
      const newUser = {
        firebase_id: res.user.uid,
        sex: onboardingInfo.sex,
        activity_level: onboardingInfo.activity_level,
        dob: onboardingInfo.dob,
        weight_kg: onboardingInfo.weight_kg,
        height_cm: onboardingInfo.height_cm,
        weekly_goal_rate: onboardingInfo.weekly_goal_rate,
        email: res.user.email
      };
      // a commit
      console.log("New user info:", newUser);
      axios
        .post("https://nutri-journal.herokuapp.com/auth/register", newUser) // { headers: auth }
        .then(response => console.log("Response:", response))
        .catch(err => console.log("Error:", err));
      // The signed-in user info.
      const user = res.user.displayName;
      const userPicture = res.additionalUserInfo.profile.picture;
      console.log("User:", user);
      console.log("Picture:", userPicture);
      // ...
      dispatch({ type: "GOOGLE_REGISTER_SUCCESS" });
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
      dispatch({ type: "GOOGLE_REGISTER_FAILURE" });
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

export const facebookRegister = onboardingInfo => dispatch => {
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

      const newUser = {
        firebase_id: res.user.uid,
        sex: onboardingInfo.sex,
        activity_level: onboardingInfo.activity_level,
        dob: onboardingInfo.dob,
        weight_kg: onboardingInfo.weight_kg,
        height_cm: onboardingInfo.height_cm,
        weekly_goal_rate: onboardingInfo.weekly_goal_rate,
        email: res.user.email
      };
      // a commit
      console.log("New user info:", newUser);
      axios
        .post("https://nutri-journal.herokuapp.com/auth/register", newUser) // { headers: auth }
        .then(response => console.log("Response:", response))
        .catch(err => console.log("Error:", err));

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
