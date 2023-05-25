
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBHcxdMSW6oDfa10zt3HdcWwTzrPsiP-mo",
  authDomain: "jogodamemoriatepi.firebaseapp.com",
  projectId: "jogodamemoriatepi",
  storageBucket: "jogodamemoriatepi.appspot.com",
  messagingSenderId: "153720798597",
  appId: "1:153720798597:web:335295c2b29415195a98ec",
  measurementId: "G-YYW17EXXBR"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  
  const auth = firebase.auth();
  const db = getFirestore();
  
  export { auth, db };;
