const { mongo, Mongoose } = require('mongoose');

var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Isp = require('./api/models/ispModel'),
  bodyParser = require('body-parser');



  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:pranks@2323@cluster0.rngf9.mongodb.net/aniket-website?retryWrites=true&w=majority',{ 
  useNewUrlParser: true
}, function(err, db) {
  if (err)
    console.log("DB connection error" + err)
})


app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());


var routes = require('./api/routes/ispListRoutes');
routes(app);

app.listen(port);

console.log('Get me fiber backend api started on:' + port);
