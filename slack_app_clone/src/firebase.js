import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSr8GBgCCzlVs1l0s_SM2sQT02zcGcPwI",
  authDomain: "slack-app-clone-6e078.firebaseapp.com",
  projectId: "slack-app-clone-6e078",
  storageBucket: "slack-app-clone-6e078.appspot.com",
  messagingSenderId: "576244840479",
  appId: "1:576244840479:web:4ea6fbdb3e04ff611a3d2a",
  measurementId: "G-EZF8DYBNQB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider };