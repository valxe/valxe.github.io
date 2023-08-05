const outputElement = document.querySelector('.output');

function handleRequest(content, message) {
  const requestInfo = document.createElement('p');
  requestInfo.textContent = `Contenu : ${content}, Message : ${message}`;
  outputElement.appendChild(requestInfo);
}

const exampleContent = '';
const exampleMessage = '';
handleRequest(exampleContent, exampleMessage);
