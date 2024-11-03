
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth ,signOut ,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBZQ90NTVN-0dnYDjCYw15A4hZ7sajt_zQ",
    authDomain: "authentication-89ed2.firebaseapp.com",
    projectId: "authentication-89ed2",
    storageBucket: "authentication-89ed2.appspot.com",
    messagingSenderId: "299307979437",
    appId: "1:299307979437:web:15e3d2eb3b108a95adec24"
  };

  const app = initializeApp(firebaseConfig); 
  const auth = getAuth(app)
 

  export {getAuth,signOut ,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification }