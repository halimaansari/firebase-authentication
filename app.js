import { createUserWithEmailAndPassword, getAuth } from "./firebase.js"; // Import Firebase functions

document.addEventListener("DOMContentLoaded", () => {
    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const signupBtn = document.getElementById("signupBtn");

    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
           
            if (signupEmail.value.trim() === "" || signupPassword.value.trim() === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Missing Data',
                    text: 'Please fill in both email and password fields.',
                });
                return;  
            }

           
            const auth = getAuth(); 

            createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User created:", user);
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful',
                        text: 'You have successfully created your account!',
                    });
                  
                    setTimeout(() => {
                        location.href = "signin.html";
                    }, 1500); 
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("Error code:", errorCode);
                    console.error("Error message:", errorMessage);

                    
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: errorMessage, 
                    });
                });
        });
    }
});





