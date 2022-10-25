import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBO_--KxMt0ddnN_p7SsYZmersn1dT-QHg",
  authDomain: "lcalisti.firebaseapp.com",
  projectId: "lcalisti",
  storageBucket: "lcalisti.appspot.com",
  messagingSenderId: "611921124984",
  appId: "1:611921124984:web:19f9797825cf1df59a978d",
  measurementId: "G-R5LX3EXPPY"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};