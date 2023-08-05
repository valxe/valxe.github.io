const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const messages = [];

app.post('/api/send-message', (req, res) => {
  const { username, content } = req.body;
  const newMessage = { username, content };
  messages.push(newMessage);
  console.log('Nouveau message :', newMessage);
  res.json({ message: 'Message reçu' });
});

app.get('/api/get-messages', (req, res) => {
  res.json(messages);
});

app.listen(port, () => {
  console.log(`${port}`);
});
