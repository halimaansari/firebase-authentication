import { signInWithEmailAndPassword, getAuth } from "./firebase.js";

const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
    let signInPassword = document.getElementById("signInPassword");
    let signInEmail = document.getElementById("signInEmail");
    let loginBtn = document.getElementById("loginBtn");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            if (signInEmail.value.trim() && signInPassword.value.trim()) {
                signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    location.href = "profile.html";
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode);
                    console.log(errorMessage);
                });
            } else {
                console.log("Please insert your data");
            }
        });
    } else {
        console.error("Login button not found!");
    }
});

