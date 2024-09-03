function createUser() {
    const username = prompt("Enter the new user's username:");
    const password = prompt("Enter the new user's password:");
    
    if (username && password) {
        // Placeholder for adding the user to the system
        alert(`User '${username}' created with password '${password}'.`);
        // In a real application, you'd save this information securely
    } else {
        alert('User creation cancelled.');
    }
}

function deleteUser() {
    const username = prompt("Enter the username of the user to delete:");
    
    if (username) {
        // Placeholder for deleting the user from the system
        alert(`User '${username}' has been deleted.`);
        // In a real application, you'd delete this user from the database
    } else {
        alert('User deletion cancelled.');
    }
}

function changePassword() {
    const username = prompt("Enter the username for which to change the password:");
    const newPassword = prompt("Enter the new password:");
    
    if (username && newPassword) {
        // Placeholder for changing the user's password
        alert(`Password for '${username}' changed to '${newPassword}'.`);
        // In a real application, you'd update this information in the database
    } else {
        alert('Password change cancelled.');
    }
}
