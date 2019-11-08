import firebase from "../components/firebase";

console.log(firebase.auth().currentUser);

const token = localStorage.getItem("token");

// Initial state is in it's own file to be imported in reducer files
const initialState = {
  error: [],
  items: [],
  item: [],
  token: token,
  loading: false,
  getting: false,
  got: false,
  adding: false,
  added: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  loggingIn: false,
  isLoggedIn: false,
  loggedOut: token ? false : true
};

export default initialState;
