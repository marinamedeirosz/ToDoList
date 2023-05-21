// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHcxdMSW6oDfa10zt3HdcWwTzrPsiP-mo",
  authDomain: "jogodamemoriatepi.firebaseapp.com",
  projectId: "jogodamemoriatepi",
  storageBucket: "jogodamemoriatepi.appspot.com",
  messagingSenderId: "153720798597",
  appId: "1:153720798597:web:335295c2b29415195a98ec",
  measurementId: "G-YYW17EXXBR"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };
/* const analytics = getAnalytics(app); */