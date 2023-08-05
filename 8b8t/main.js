const server = new WebSocket('wss://8b8t.valxe.repl.co');

server.onmessage = (event) => {
    const message = JSON.parse(event.data);
    displayMessage(message.username, message.message);

    // Scroll vers le bas lorsque le nouveau message est ajouté
    messageList.scrollTop = messageList.scrollHeight;
};

const messageList = document.getElementById('message-list');
const chatContainer = document.querySelector('.chat-container');

function displayMessage(username, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    
    const usernameDiv = document.createElement('div');
    usernameDiv.classList.add('username');
    usernameDiv.textContent = username + " : ";
    
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    if (message.startsWith('>')) {
        contentDiv.style.color = 'green';
        contentDiv.textContent = message.substring(1);
    } else {
        contentDiv.textContent = message;
    }

    if (message.startsWith(' >')) {
        contentDiv.style.color = 'green';
        contentDiv.textContent = message.substring(1);
    } else {
        contentDiv.textContent = message;
    }
    
    messageDiv.appendChild(usernameDiv);
    messageDiv.appendChild(contentDiv);
    
    messageList.appendChild(messageDiv);
    
    chatContainer.classList.add('chat-open');
}