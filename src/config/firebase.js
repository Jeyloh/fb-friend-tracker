import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB0gcUnrCd7q2FIY07mM9oNZtRg21M1zCE",
  authDomain: "fb-friend-tracker.firebaseapp.com",
  databaseURL: "https://fb-friend-tracker.firebaseio.com",
  projectId: "fb-friend-tracker",
  storageBucket: "fb-friend-tracker.appspot.com",
  messagingSenderId: "348084952206"
};
firebase.initializeApp(config);

export default firebase;
