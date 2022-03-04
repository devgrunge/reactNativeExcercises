// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZRGT3SNiTNBDA358V3DrdW_eo9H3yvLQ",
  authDomain: "expo-navigation-firebase-auth.firebaseapp.com",
  projectId: "expo-navigation-firebase-auth",
  storageBucket: "expo-navigation-firebase-auth.appspot.com",
  messagingSenderId: "821058080233",
  appId: "1:821058080233:web:5b3b292dc2f1339093cf78",
  measurementId: "G-YET2K03Y3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);