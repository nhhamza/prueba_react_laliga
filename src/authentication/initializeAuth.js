import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB5J2-uXC2nIy8MyswushFK-_9O79NvPAU",
  authDomain: "laliga-a1f73.firebaseapp.com",
  databaseURL: "https://laliga-a1f73.firebaseio.com",
  projectId: "laliga-a1f73",
  storageBucket: "laliga-a1f73.appspot.com",
  messagingSenderId: "9633288018",
  appId: "1:9633288018:web:642ad52ce239f25d"
};

firebase.initializeApp(config);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider };
