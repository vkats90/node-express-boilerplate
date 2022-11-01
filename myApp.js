require('dotenv').config()
let express = require('express');
let app = express();

viewsPath = __dirname + '/views/index.html'
publicPath = __dirname + '/public'

//mounting a middleware function which adds style to the page
app.use('/public', express.static(publicPath))

console.log("Hello World");

//handler function for the get serve function
function handler(req, res) {
 //   res.send('Hello Express');
    res.sendFile(viewsPath)
  };
  
function jsonHandler(req, res) {
  // use the env file to display different things
    res.json(process.env.MESSAGE_STYLE=="uppercase"?{"message": "HELLO JSON"}:{"message": "Hello json"})
  };  

// displays the HTML in the / path
app.get('/',handler);

app.get('/json',jsonHandler)




























 module.exports = app;
