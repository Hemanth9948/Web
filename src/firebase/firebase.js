import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMIPoe2_qMMoVwDCWxk_8rl1Wgni1Kq-A",
  authDomain: "web9948.firebaseapp.com",
  projectId: "web9948",
  storageBucket: "web9948.appspot.com",
  messagingSenderId: "570996805885",
  appId: "1:570996805885:web:7be7618c11247b0f8f6e94",
  measurementId: "G-CD70MFF6E1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);