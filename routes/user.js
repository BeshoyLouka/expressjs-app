
/*
 * GET users listing.
 */

var db = require('../models');
var bcrypt = require('bcrypt');

exports.list = function(req, res){
  db.User.findAll({
    include: [ db.Project ]
  }).success(function(users) {
    res.render('list', {
      title: 'Express',
      users: users
    });
  });
};


exports.create = function(req, res) {
  db.User.create({
        name: req.param('name'),
        title: req.param('title'),
        email: req.param('email'),
        password: hashPswd(req.param('password'))
    }).success(function() {
        res.redirect('/users');
  });
/*
  var user = db.User.build({
    name: req.param('name'),
    title: req.param('title'),
    email: req.param('email'),
    password: hashPswd(req.param('password'))
  });
  user.save().complete(function(err){
    if (!!err) {
      console.log('The instance has not been saved:', err);
    } else {
      console.log('We have a persisted instance now');
    }
  });
*/
  /**/
  function hashPswd(value) {
    bcrypt.hash(value, 10, function passwordEncrypted(err, encrypted) {
        // Store hash in your password DB.
        console.log('insied the hash func encrypted is: ' + encrypted);
        //TODO: that solution is creating a new entry row in the db with the hashed pswd
        db.User.create({ password:encrypted }).success(function(){
            console.log('saved pswd');
        });
    });
  }
  /**/
};

exports.destroy = function(req, res) {
  db.User.find({ where: { id: req.param('user_id') } }).success(function(user) {
    db.Project.find({ where: { id: req.param('project_id') } }).success(function(project) {
      project.setUser(null).success(function() {
        project.destroy().success(function() {
          res.redirect('/users');
        });
      });
    });
  });
};
