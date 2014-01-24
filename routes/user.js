
/*
 * GET users listing.
 */

var db = require('../models');

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
