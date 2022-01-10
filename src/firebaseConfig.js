import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { setGlobal } from 'reactn';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCphahkcSQT77TlH5apAayeEURDr0hrZos',
  authDomain: 'classfunc-com.firebaseapp.com',
  databaseURL: 'https://classfunc-com.firebaseio.com',
  projectId: 'classfunc-com',
  storageBucket: 'classfunc-com.appspot.com',
  messagingSenderId: '248295356222',
  appId: '1:248295356222:web:691cf2e30a0d34d53b5e6f',
  measurementId: 'G-YBX664HYQ0',
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    setGlobal({ user });
  } else {
    // No user is signed in.
  }
});
