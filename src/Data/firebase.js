// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmRAE5X_U6U3u5k_t4CMSTiN8PpfXM7Cg",
  authDomain: "login-45129.firebaseapp.com",
  projectId: "login-45129",
  storageBucket: "login-45129.appspot.com",
  messagingSenderId: "1080634353056",
  appId: "1:1080634353056:web:5a5f4849af95fbbc0130c5",
  measurementId: "G-FQFJR1VF0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
const analytics = getAnalytics(app);
export const db= getFirestore(app);
export default app;