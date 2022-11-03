require('dotenv').config()
let bodyParser = require('body-parser')
let express = require('express');
let app = express();

viewsPath = __dirname + '/views/index.html'
publicPath = __dirname + '/public'

function logger(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip );
  next();
}

//mounting middleware functions
app.use('/public', express.static(publicPath));
app.use(logger);
app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/now',function(req, res, next) {
  req.time = new Date().toString();
  next();
},function(req, res) {
  res.json({'time': req.time});
})

app.get('/json',jsonHandler)

app.get('/:word/echo',function(req,res){
  res.json({'echo':req.params.word})
})

/*app.get('/name',function(req,res){
  res.json({ 'name': req.query.first+' '+req.query.last})
}) */

app.post('/name',function(req,res){
  res.json({ 'name': req.body.first+' '+req.body.last}) 
});






















 module.exports = app;
