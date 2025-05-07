// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh1IQPsctVXek6DjU4X7DeyyA8fbcHOcY",
  authDomain: "talkon-d9776.firebaseapp.com",
  projectId: "talkon-d9776",
  storageBucket: "talkon-d9776.firebasestorage.app",
  messagingSenderId: "80248184743",
  appId: "1:80248184743:web:171d2240986d1779bea082",
  measurementId: "G-JCRBNB34N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app)
export default app
