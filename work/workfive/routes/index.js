var express = require('express');
var router = express.Router();
var data = require('../data.json');

/* GET home page. */

router.get('/',function(req,res,next){
  res.render('login');
});

router.get('/list',function(req,res,next){
  res.render('list',{data});
});

router.post('/signin',function(req,res,next){
  if(req.body.username=data.users[0].username && req.body.pwd==data.users[0].password){
    res.render('list',{data});
  }
  else{
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    res.end("用户名或密码错误")
  }
});

module.exports = router;
