import firebase from "firebase";
require("@firebase/firestore");

  var firebaseConfig = {
    apiKey: "AIzaSyC9hE1B22Y7eUeWEaKmLpOnaI_WFDnYSWY",
    authDomain: "book-santa-1866c.firebaseapp.com",
    projectId: "book-santa-1866c",
    storageBucket: "book-santa-1866c.appspot.com",
    messagingSenderId: "1005360824453",
    appId: "1:1005360824453:web:3ac3253b1f0f4abcbe69ec"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
