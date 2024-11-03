
import { createUserWithEmailAndPassword, getAuth } from "./firebase.js";

const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const signupBtn = document.getElementById("signupBtn");

    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            if (signupEmail.value.trim() && signupPassword.value.trim()) {
                createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        console.log("User created:", user);
                        location.href = "signin.html"
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.error("Error code:", errorCode);
                        console.error("Error message:", errorMessage);
                    });
            } else {
                console.log("Please enter your data");
            }
        });
    } else {
        console.error();
    }
});



