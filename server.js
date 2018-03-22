'use strict'

var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Message = require('./model/message');

var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

mongoose.connect('mongodb://<ben_ghirardani>:<calendar_db123>@ds119969.mlab.com:19969/calendar_db')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');    
  res.setHeader('Cache-Control', 'no-cache');
  next();
})

router.get('/', function(req, res){
    res.json({message: 'API Initialized'});
});

router.route('/message')
  .get(function(req, res){
    Message.find(function(err, message){
        if(err)
        res.send(err);
        res.json(comments)
    });
  })

  .post(function(req, res){
      var message = new Message();
      message.day = req.body.day;
      message.month = req.body.month;
      message.dayNum = req.body.dayNum;
      message.year = req.body.year;
      message.message = req.body.message;
      message.amount = req,body.amount;

      comment.save(function(err){
          if(err)
          res.send(err);
          res.json({message: "Message added!"});
      });
  });

app.use('/api', router);

app.listen(port, function(){
    console.log('api running on port ${port}')
})