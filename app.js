const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require("node-fetch");
const api_key = process.env.API_KEY;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, 'build')));

app.post('/signup', (req, res) => {
  fetch('https://us4.api.mailchimp.com/3.0/lists/89060c2d3e', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': api_key
    },
    body: req.body
  }).then(response => {
    return res.json()
  })
    .then(data => console.log(req.body))
    .catch(error => console.log('ERROR'))
})

const port = process.env.port || 5000;
app.listen(port, console.log(`Server started on ${port}`));