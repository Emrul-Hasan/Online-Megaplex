// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE_wPOrG4Iq_8z8cqvoEqVyJdUIPEuefU",
  authDomain: "ema-john-simple-project-784a2.firebaseapp.com",
  projectId: "ema-john-simple-project-784a2",
  storageBucket: "ema-john-simple-project-784a2.appspot.com",
  messagingSenderId: "90099279537",
  appId: "1:90099279537:web:f5c189c65d99149fcc2490"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
