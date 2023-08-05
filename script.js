const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', async () => {
  const content = document.getElementById('contentInput').value;
  const message = document.getElementById('messageInput').value;

  const formData = new FormData();
  formData.append('content', content);
  formData.append('message', message);

  try {
    const response = await fetch('https://formspree.io/f/xleygkzq', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Requête envoyée');
    } else {
      console.error('Échec');
    }
  } catch (error) {
    console.error('Erreur:', error);
  }
});
