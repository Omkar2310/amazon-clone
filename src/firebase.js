import * as firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCQFuQ5kOL_LXoQCc84zO8x1Q6rsefRFVc",
  authDomain: "clone-f2c03.firebaseapp.com",
  databaseURL: "https://clone-f2c03.firebaseio.com",
  projectId: "clone-f2c03",
  storageBucket: "clone-f2c03.appspot.com",
  messagingSenderId: "312867801601",
  appId: "1:312867801601:web:d3dc9a331ca5c23ce04e00",
  measurementId: "G-5545EMHV99"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();

