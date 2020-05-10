import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDR9pc9nU0cgslrXyAP6KeRZdlTaehHNeU",
    authDomain: "crown-db-5e90e.firebaseapp.com",
    databaseURL: "https://crown-db-5e90e.firebaseio.com",
    projectId: "crown-db-5e90e",
    storageBucket: "crown-db-5e90e.appspot.com",
    messagingSenderId: "578567097855",
    appId: "1:578567097855:web:9c723915865cf0f5e3ebca",
    measurementId: "G-XDBWQ9NSH4"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;