// ----
// Dependencies
import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseCredentials } from './config';

const firebaseConfig = firebase.initializeApp( firebaseCredentials );

export { firebaseConfig as firebase };
