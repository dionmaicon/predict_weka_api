var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
  var cors = require('cors');

app.options('/j48', cors()) // enable pre-flight request for DELETE request
app.use(bodyParser({limit: '2mb'}));
app.use(bodyParser.urlencoded({limit: '2mb', extended: true}));

  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./src/routes/generalRoutes'); //importing route
routes.add(app, 'j48Routes'); //register the route



app.use(express.static('public/'));

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});


app.listen(port);


console.log('Ecommerce RESTful API server started: ' + port);
