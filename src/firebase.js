// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJQZCs602EDGyldNTk1ZvgD_Bu4MZSYCE",
  authDomain: "chat-app-abecf.firebaseapp.com",
  projectId: "chat-app-abecf",
  storageBucket: "chat-app-abecf.appspot.com",
  messagingSenderId: "980793404099",
  appId: "1:980793404099:web:ef453da3208995355b9076",
  measurementId: "G-02TNT6NXR8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

