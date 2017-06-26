const express = require('express');
const mustache = require('mustache-express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const dataFile = require('./todo.js');




var application = express();
application.engine('mustache', mustacheExpress());
application.set('view engine', 'mustache');

application.set('views', './views');

application.use(bodyParser.urlencoded()); // take in data and read it from the form
application.use(express.static('public'));
//application.use(expressValidator);

 
application.get('/', (request, response) => {
    response.render('todo', dataFile);
    //console.log('get request');
   //response.send('Hi!');
});



application.listen(3000, function () {
  console.log('Successfully started express application!');
});
 
