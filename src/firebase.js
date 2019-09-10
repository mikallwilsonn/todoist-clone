// ----
// Dependencies
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyD5UlDms2cR7D8g_CHuISWC5GQEmBmp9i4",
    authDomain: "todoist-clone-mw.firebaseapp.com",
    databaseURL: "https://todoist-clone-mw.firebaseio.com",
    projectId: "todoist-clone-mw",
    storageBucket: "todoist-clone-mw.appspot.com",
    messagingSenderId: "74052320080",
    appId: "1:74052320080:web:5a0e7cfd6bd438da5c4a55"
});

export { firebaseConfig as firebase };
