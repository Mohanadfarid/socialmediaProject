// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFiresotre} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDlN-lFYBpzT7jelLBWuE2d7ScxEWcjf0",
  authDomain: "social-media-app-59a41.firebaseapp.com",
  projectId: "social-media-app-59a41",
  storageBucket: "social-media-app-59a41.appspot.com",
  messagingSenderId: "909567223638",
  appId: "1:909567223638:web:9da859e74d7d264e9958f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFiresotre();