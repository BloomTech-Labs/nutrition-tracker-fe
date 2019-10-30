import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAk0794OsQuDuoEdUfF9nUM_zD17lfRXEE",
  authDomain: "codedamn-socialapp.firebaseapp.com",
  databaseURL: "https://codedamn-socialapp.firebaseio.com",
  projectId: "codedamn-socialapp",
  storageBucket: "codedamn-socialapp.appspot.com",
  messagingSenderId: "263473733320"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
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
