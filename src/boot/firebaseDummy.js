// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
 //Place for Firebase Config Data
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

let firebaseAuth = firebaseApp.auth();

let firebaseDB = firebaseApp.database();


export {firebaseAuth, firebaseDB}
