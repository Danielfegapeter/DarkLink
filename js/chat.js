import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const auth = getAuth();
const db = getFirestore();

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('message-input').value;
    const user = auth.currentUser;

    if (messageInput && user) {
        addDoc(collection(db, "messages"), {
            text: messageInput,
            email: user.email,
            timestamp: serverTimestamp()
        }).then(() => {
            document.getElementById('message-input').value = '';
        }).catch((error) => {
            alert(`Error sending message: ${error.message}`);
        });
    } else {
        alert('Please enter a message and ensure you are logged in.');
    }
}

// Real-time listener for new messages
onSnapshot(collection(db, "messages"), (snapshot) => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML = ''; // Clear the chat window
    snapshot.forEach((doc) => {
        const message = doc.data();
        const messageElement = document.createElement('p');
        messageElement.textContent = `${message.email}: ${message.text}`;
        chatWindow.appendChild(messageElement);
    });
});

// Attach sendMessage function to the Send button
document.querySelector('button').addEventListener('click', sendMessage);
