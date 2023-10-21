// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlt2NWIJSJFU1uo6XJ0VhZDFrlyVVLJQ8",
  authDomain: "car-store-user.firebaseapp.com",
  projectId: "car-store-user",
  storageBucket: "car-store-user.appspot.com",
  messagingSenderId: "197273630770",
  appId: "1:197273630770:web:abb6e82e7bdf60923b642b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;