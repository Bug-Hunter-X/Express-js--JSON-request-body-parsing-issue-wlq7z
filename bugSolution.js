const express = require('express');
const app = express();

app.use(express.json({ limit: '50mb' })); // Added for handling larger requests

app.post('/data', (req, res) => {
  console.log('Received data:', req.body);
  if (!req.body) {
    return res.status(400).send({ error: 'Invalid JSON request body' });
  }
  // Process the request data here
  res.send('Data received');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});