
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
  
  const auth = firebase.auth();
  const db = getFirestore();
  
  export { auth, db };;
