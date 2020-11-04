var express = require('express');
var router = express.Router();

var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Express'});
});

//
router.get('/userlist', function(req, res) {
    /*
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
console.log(docs );
      res.render('userlist', {
          "userlist" : docs
      });
  });
    */
});
/******************************** 
* 
*********************************/
router.get('/login', function(req, res) {
  res.render('login', { user : req.user });
});

/******************************** 
* 
*********************************/
router.post('/login', passport.authenticate('local', 
  {
    successRedirect: '/',
    failureRedirect: '/login',
    session: false
  }
));

/*
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});
*/

module.exports = router;
