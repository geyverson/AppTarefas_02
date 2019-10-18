import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBmpra4vsbtt6SQAJBmtRDv5MFdrUh5dnc",
    authDomain: "apptarefas-19a88.firebaseapp.com",
    databaseURL: "https://apptarefas-19a88.firebaseio.com",
    projectId: "apptarefas-19a88",
    storageBucket: "apptarefas-19a88.appspot.com",
    messagingSenderId: "404057184021",
    appId: "1:404057184021:web:e7626d22d22b2114fc3b1c",
    measurementId: "G-LWH3EMS48M"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firebaseAuth = firebaseApp.auth();