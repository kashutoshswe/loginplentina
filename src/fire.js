import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDAbW70Q9OGcyOqskq9yHcXHJ5s28ucLNg",
  authDomain: "login-2ea17.firebaseapp.com",
  projectId: "login-2ea17",
  storageBucket: "login-2ea17.appspot.com",
  messagingSenderId: "16505043124",
  appId: "1:16505043124:web:b494dbc81fc3ef340cffe1",
  measurementId: "G-KBY7255G4K",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
