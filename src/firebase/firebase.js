import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMIPoe2_qMMoVwDCWxk_8rl1Wgni1Kq-A",
  authDomain: "web9948.firebaseapp.com",
  projectId: "web9948",
  storageBucket: "web9948.appspot.com",
  messagingSenderId: "570996805885",
  appId: "1:570996805885:web:7be7618c11247b0f8f6e94",
  measurementId: "G-CD70MFF6E1"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
