import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase app init and config
const firebaseConfig = {
  apiKey: "AIzaSyAzzEOtkO5T63y0skOtP_oO2D7ukxjNs-I",
  authDomain: "getnutrijournal.firebaseapp.com",
  databaseURL: "https://getnutrijournal.firebaseio.com",
  projectId: "getnutrijournal",
  storageBucket: "getnutrijournal.appspot.com",
  messagingSenderId: "869823725802",
  appId: "1:869823725802:web:86e08c0ec10aac24805793"
};
firebase.initializeApp(firebaseConfig);
// firebase.firestore().settings({ timestampsInSnapshots: true });

// const firebaseConfig = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
// });

export default firebase;
