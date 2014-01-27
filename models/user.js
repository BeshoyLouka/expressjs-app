var bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    title: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    associate: function(models) {
      User.hasMany(models.Project);
    }/*,
    instanceMethods: {
      setPassword: function() {
        return console.log("HASHED");
      }
    }*/
  });

  return User;
};
