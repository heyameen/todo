import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyB3uF_F-9voIHKDYKzUo_sm2OcLEMhzxKs",
    authDomain: "todo-app-11a02.firebaseapp.com",
    databaseURL: "https://todo-app-11a02.firebaseio.com",
    projectId: "todo-app-11a02",
    storageBucket: "todo-app-11a02.appspot.com",
    messagingSenderId: "1018945494732",
    appId: "1:1018945494732:web:759915f6388e1b172a6c69"   
})

export {firebaseConfig as firebase}