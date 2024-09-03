document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting the traditional way
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Placeholder logic for checking username and password
    if (username === 'admin' && password === 'yourAdminPassword') {
        alert('Welcome, Admin!');
        // In a real application, you'd redirect to the admin dashboard here
        window.location.href = '../admin/dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});
