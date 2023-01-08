import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyClFClALcReYS6V-Dv0Qemy_S13drKNOiU",
    authDomain: "shopton-42786.firebaseapp.com",
    databaseURL: "https://shopton-42786-default-rtdb.firebaseio.com",
    projectId: "shopton-42786",
    storageBucket: "shopton-42786.appspot.com",
    messagingSenderId: "290832033783",
    appId: "1:290832033783:web:3f022fac8bcc80e3db30f2",
    measurementId: "G-F188MXBW9B"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

