
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

 var hashPswd = function(v){
        var hash = bcrypt.hashSync(v, 8);
        return hash;
  };

  db.User.create({
        name: req.param('name'),
        title: req.param('title'),
        email: req.param('email'),
        password: hashPswd(req.param('password'))
    }).success(function() {
        res.redirect('/users');
  });


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
