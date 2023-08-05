const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const messages = [];

app.post('/receive-message', (req, res) => {
  const { username, content } = req.body;
  const newMessage = { username, content };
  messages.push(newMessage);
  console.log('Nouveau message reçu :', newMessage);
  res.json({ message: 'Message reçu' });
});

app.get('/get-messages', (req, res) => {
  res.json(messages);
});

app.listen(port, () => {
  console.log(`C'est utile je crois${port}`);
});
