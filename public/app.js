import { createUserWithEmailAndPassword, getAuth } from "./firebase.js"; // Import Firebase functions


document.addEventListener("DOMContentLoaded", () => {
    // Get references to the form fields
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const signupEmail = document.getElementById("signupEmail");
    const phone = document.getElementById("phone");
    const signupPassword = document.getElementById("signupPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const signupBtn = document.getElementById("signupBtn");

    // Add event listener to signup button
    if (signupBtn) {
        signupBtn.addEventListener("click", () => {
            // Check if all fields are filled
            if (firstName.value.trim() === "" || lastName.value.trim() === "" || signupEmail.value.trim() === "" || phone.value.trim() === "" || signupPassword.value.trim() === "" || confirmPassword.value.trim() === "") {
                Swal.fire({
                    icon: 'error',
                    title: 'Missing Data',
                    text: 'Please fill in all fields.',
                });
                return;  // Stop if any field is empty
            }

            // Check if passwords match
            if (signupPassword.value !== confirmPassword.value) {
                Swal.fire({
                    icon: 'error',
                    title: 'Password Mismatch',
                    text: 'The passwords do not match. Please try again.',
                });
                return;  // Stop if passwords don't match
            }

            const auth = getAuth();

            // Create user with email and password
            createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User created:", user);

                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful',
                        text: 'You have successfully created your account!',
                    });

                    // Redirect to sign-in page after 1.5 seconds
                    setTimeout(() => {
                        location.href = "signin.html";
                    }, 1500);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error("Error:", errorMessage);

                    // Show error message using SweetAlert2
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: errorMessage,
                    });
                });
        });
    }
});
