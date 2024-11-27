// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZQ90NTVN-0dnYDjCYw15A4hZ7sajt_zQ",
    authDomain: "authentication-89ed2.firebaseapp.com",
    projectId: "authentication-89ed2",
    storageBucket: "authentication-89ed2.appspot.com",
    messagingSenderId: "299307979437",
    appId: "1:299307979437:web:15e3d2eb3b108a95adec24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

// Exporting necessary authentication functions
export { 
    getAuth,
    signOut, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    updateProfile, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    sendEmailVerification 
};

