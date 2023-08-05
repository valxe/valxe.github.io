const messagesContainer = document.querySelector('.messages');

fetch('https://api.formspree.io/xleygkzq/submissions')
  .then(response => response.json())
  .then(data => {
    displayMessages(data);
  })
  .catch(error => {
    console.error('Erreur :', error);
  });

function displayMessages(messages) {
  messages.forEach(message => {
    const messageElement = document.createElement('p');
    messageElement.textContent = `Contenu : ${message.content}, Message : ${message.message}`;
    messagesContainer.appendChild(messageElement);
  });
}
