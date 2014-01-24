module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    title: DataTypes.STRING
  }, {
    associate: function(models) {
      Project.belongsTo(models.User);
    }
  });

  return Project;
};
