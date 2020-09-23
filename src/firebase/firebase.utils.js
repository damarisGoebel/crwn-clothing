import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCFdTjN26T0vUrGNt5f67x9NDIyNPzzWYA",
    authDomain: "crwn-db-f6a66.firebaseapp.com",
    databaseURL: "https://crwn-db-f6a66.firebaseio.com",
    projectId: "crwn-db-f6a66",
    storageBucket: "crwn-db-f6a66.appspot.com",
    messagingSenderId: "785027247790",
    appId: "1:785027247790:web:0cccca3e51743bcfeac73f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;