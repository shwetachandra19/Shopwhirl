 // Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  updateProfile,
  updateEmail
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBIeVzgHV3VrCFrAe6orJtGucKCWPH-h5I",
  authDomain: "shopwhirl.firebaseapp.com",
  projectId: "shopwhirl",
  storageBucket: "shopwhirl.appspot.com",
  messagingSenderId: "43711346318",
  appId: "1:43711346318:web:103ebbc6fb5ac22f09bbdf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Listen for Auth State
onAuthStateChanged(auth, (user) => {
  if (user) {
    const isGuest = user.isAnonymous;
    const name = user.displayName || (isGuest ? "Guest User" : "User");
    const email = user.email || "guest@shopwhirl.com";

    // Set profile name/email
    document.querySelector(".profile-left h2").textContent = name;
    document.querySelector(".profile-left p").textContent = email;
    document.getElementById("welcomeMessage").textContent = `👋 Welcome back, ${name}!`;

    // Pre-fill edit inputs
    document.getElementById("editName").value = name;
    document.getElementById("editEmail").value = email;

    // Hide Edit features for Guest
    if (user.isAnonymous) {
      // Guest mode
      document.querySelector(".profile-left h2").textContent = "Guest User";
      document.querySelector(".profile-left p").textContent = "guest@shopwhirl.com";
      document.getElementById("welcomeMessage").textContent = "👋 Welcome, Guest!";

      document.getElementById("editProfileBtn").style.display = "none";
      document.querySelector(".edit-box").innerHTML =
        `<p style="text-align:center;">⚠️ Guest users can't edit profile. <a href="login.html">Sign up</a> for full access.</p>`;
    } else {

      // ✅✅ ✅ EDIT PROFILE BUTTON FUNCTIONALITY
      document.getElementById("editProfileBtn").addEventListener("click", () => {
        document.getElementById("welcomeBox").classList.add("hidden");
        document.getElementById("editBox").classList.remove("hidden");
      });

      // ✅✅ ✅ SAVE CHANGES
      document.getElementById("saveChangesBtn").addEventListener("click", () => {
        const newName = document.getElementById("editName").value.trim();
        const newEmail = document.getElementById("editEmail").value.trim();

        const promises = [];

        if (newName && newName !== user.displayName) {
          promises.push(updateProfile(user, { displayName: newName }));
        }

        if (newEmail && newEmail !== user.email) {
          promises.push(updateEmail(user, newEmail));
        }

        Promise.all(promises)
          .then(() => {
            alert("Profile updated successfully!");
            window.location.reload();
          })
          .catch(error => {
            alert("Error updating profile: " + error.message);
          });
      });
    }

    // Log out button
    document.querySelector(".logout").addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "index.html";
      }).catch(error => {
        alert("Error logging out: " + error.message);
      });
    });

  } else {
    window.location.href = "index.html";
  }
});


// ✅ Update DOM when user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    const name = user.displayName || "User";
    const email = user.email;

    document.getElementById("profileName").textContent = name;
    document.getElementById("profileEmail").textContent = email;
    document.getElementById("welcomeMessage").textContent = `👋 Welcome back, ${name}!`;
  } else {
    window.location.href = "index.html"; // Redirect if not logged in
  }
});

// ✅ Optional: Logout functionality
document.querySelector(".logout").addEventListener("click", () => {
  signOut(auth)
    .then(() => window.location.href = "index.html")
    .catch((error) => alert("Logout error: " + error.message));
});
