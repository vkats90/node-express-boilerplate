let express = require('express');
let app = express();

console.log("Hello World");

app.get('/',handler);

function handler(req, res) {
    res.send('Hello Express');
  };
































 module.exports = app;
