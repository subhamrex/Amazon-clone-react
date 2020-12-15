import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCTqpAVW29Dwnq08XmOsmlcc-PKXr_Z_-c",
  authDomain: "clone-61596.firebaseapp.com",
  databaseURL: "https://clone-61596-default-rtdb.firebaseio.com",
  projectId: "clone-61596",
  storageBucket: "clone-61596.appspot.com",
  messagingSenderId: "1006102516575",
  appId: "1:1006102516575:web:8788344022a124e5c25cea",
  measurementId: "G-R34S8K6PLZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db , auth};
