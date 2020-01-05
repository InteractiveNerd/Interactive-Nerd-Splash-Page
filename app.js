const express = require('express');
const req = require('request');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'build')));

app.post('/signup', (req, res) => {
  console.log(req.body)
  res.send('hello')
})

const port = process.env.port || 5000;
app.listen(port, console.log(`Server started on ${port}`));