const express = require('express');
require('dotenv').config();

connection();

const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Welcome to the dark world');
});

app.listen(port, () => {
  console.log('Application is running on http://localhost:8080');
});
