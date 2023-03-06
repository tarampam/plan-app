//import * as firebase from 'firebase';
const firebase = require('firebase/app').default
import '@firebase/auth';
import '@firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyAJvps47y_LKfRcWGz74AxhuN7bCT_W7nc",
  authDomain: "timetable-pro.firebaseapp.com",
  databaseURL: "https://timetable-pro-default-rtdb.firebaseio.com",
  projectId: "timetable-pro",
  storageBucket: "timetable-pro.appspot.com",
  messagingSenderId: "759142014716",
  appId: "1:759142014716:web:9965c321750ffbc5324179"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
