function sendMessage() {
    const message = document.getElementById('message-input').value;

    if (message) {
        const chatWindow = document.getElementById('chat-window');
        const newMessage = document.createElement('p');
        newMessage.textContent = message;
        chatWindow.appendChild(newMessage);
        document.getElementById('message-input').value = ''; // Clear the input
    } else {
        alert('Please enter a message.');
    }
}
