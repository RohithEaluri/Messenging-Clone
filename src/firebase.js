 
  import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAMI9eHxpq4Yg9IfqTa_E61LQoNuZngQiA",
  authDomain: "msg-clone-a0329.firebaseapp.com",
  projectId: "msg-clone-a0329",
  storageBucket: "msg-clone-a0329.appspot.com",
  messagingSenderId: "906464866514",
  appId: "1:906464866514:web:70c5b3db42cd5fe3657d0b",
  measurementId: "G-Q2V7JGFWE8"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };