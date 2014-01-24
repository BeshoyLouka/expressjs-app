var db = require('../models');

exports.create = function(req, res) {
  db.User.find({ where: { id: req.param('user_id') } }).success(function(user) {
    db.Project.create({ title: req.param('title') }).success(function(title) {
      title.setUser(user).success(function() {
        res.redirect('/users');
      });
    });
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
