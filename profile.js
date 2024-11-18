import { getAuth, onAuthStateChanged, sendEmailVerification, updateProfile, signOut } from "./firebase.js";

const auth = getAuth();
let profilePage = document.getElementById("profile-page");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user);

    const profilePic = user.photoURL || 'https://cdn-icons-png.flaticon.com/256/3135/3135823.png';  // Default image

    profilePage.innerHTML = `
      <div class="profile-card">
        <img src="${profilePic}" class="profile-pic" alt="Profile Picture" />
        <h2>${user.displayName || 'No Name Set'}</h2>

        <div class="info-row">
          <div><label>Email:</label></div>
          <div>${user.email}</div>
        </div>
        <div class="info-row">
          <div><label>Phone:</label></div>
          <div>(097) 234-5678</div>
        </div>
        <div class="info-row">
          <div><label>Address:</label></div>
          <div>Bay Area, San Francisco, CA</div>
        </div>
        <div class="info-row">
          <div><label>Email Verified:</label></div>
          <div>${user.emailVerified ? "Yes" : "No"}</div>
        </div>

        <div class="card-footer">
          <button type="button" class="btn-custom" id="verifyEmail">Verify Email</button>
          <button type="button" class="btn-custom" id="updateProfile">Update Profile</button>
          <button type="button" class="btn-custom" id="signOut">Sign Out</button>
        </div>
      </div>
    `;

    // Email verification
    document.getElementById("verifyEmail").addEventListener("click", () => {
      sendEmailVerification(auth.currentUser).then(() => {
        console.log("Email verification has been sent.");
        Swal.fire({
          icon: 'info',
          title: 'Verification Email Sent',
          text: 'Please check your inbox to verify your email address.',
        });
      }).catch((error) => {
        console.error("Error sending email verification:", error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to send verification email.',
        });
      });
    });

    // Update profile
    document.getElementById("updateProfile").addEventListener("click", () => {
      const newDisplayName = prompt("Enter your new display name:", user.displayName || "User");
      const newPhotoURL = prompt("Enter the URL of your new profile picture:", profilePic);

      if (newDisplayName && newPhotoURL) {
        updateProfile(auth.currentUser, {
          displayName: newDisplayName,
          photoURL: newPhotoURL,
        })
        .then(() => {
          console.log("Profile updated");
          Swal.fire({
            icon: 'success',
            title: 'Profile Updated',
            text: 'Your profile has been successfully updated!',
          });
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Profile Update Failed',
            text: error.message,
          });
        });
      }
    });

    // Sign out
    document.getElementById("signOut").addEventListener("click", () => {
      signOut(auth).then(() => {
        console.log("User has been signed out");
        Swal.fire({
          icon: 'success',
          title: 'Signed Out',
          text: 'You have successfully signed out!',
        });
        window.location.href = 'signin.html'; // Redirect to signin page
      }).catch((error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Sign Out Failed',
          text: 'An error occurred while signing out.',
        });
      });
    });

  } else {
    console.log("User is logged out");
    window.location.href = 'signin.html'; // Redirect if not authenticated
  }
});
