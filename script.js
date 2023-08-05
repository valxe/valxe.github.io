const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/receive-message', (req, res) => {
  const { username, message } = req.body;
  res.send('Message reçu hihi');
});

app.listen(port, () => {
  console.log(`C'est utile ca ${port}`);
});
