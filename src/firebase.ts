import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzj1YLwhQASoOyEdT31I5qdhr44VvkWrw",
  authDomain: "twitter-clone-f5385.firebaseapp.com",
  projectId: "twitter-clone-f5385",
  storageBucket: "twitter-clone-f5385.appspot.com",
  messagingSenderId: "189241130513",
  appId: "1:189241130513:web:3b58e88b29c4b0440bbbb0",
  measurementId: "G-2107PK4QGT",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
