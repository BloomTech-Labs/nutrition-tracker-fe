import * as firebase from "firebase/app";
import "firebase/auth";

// firebase config variable
const firebaseConfig = {
  apiKey: "AIzaSyAzzEOtkO5T63y0skOtP_oO2D7ukxjNs-I",
  authDomain: "getnutrijournal.firebaseapp.com",
  databaseURL: "https://getnutrijournal.firebaseio.com",
  projectId: "getnutrijournal",
  storageBucket: "getnutrijournal.appspot.com",
  messagingSenderId: "869823725802",
  appId: "1:869823725802:web:86e08c0ec10aac24805793"
};

// created a class to create login/logout/register
class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password);
    return this.auth.currentUser.updateProfile({
      displayName: name
    });
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  getCurrentUsername() {
    return this.auth.currentUser && this.auth.currentUser.displayName;
  }
}

export default new Firebase();
