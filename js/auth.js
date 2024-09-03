import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const auth = getAuth();

// Function to handle user sign-up
function signUp() {
    const email = prompt("Enter the new user's email:");
    const password = prompt("Enter the new user's password:");

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`User '${user.email}' created successfully!`);
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
}

// Function to handle user login
function login() {
    const email = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert(`Welcome, ${user.email}!`);
            window.location.href = '../dashboard.html'; // Redirect to the dashboard
        })
        .catch((error) => {
            alert(`Error: ${error.message}`);
        });
}

// Function to handle user logout
function logout() {
    signOut(auth).then(() => {
        alert('User signed out.');
        window.location.href = '../auth/login.html'; // Redirect to the login page
    }).catch((error) => {
        alert(`Error: ${error.message}`);
    });
}

// Attach login function to the login form
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});
