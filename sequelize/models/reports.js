'use strict';
module.exports = (sequelize, DataTypes) => {
  const reports = sequelize.define('reports', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
  }, {});
  reports.associate = function(models) {
    // adds report_id to comparable_properties
    reports.hasMany(models.comparable_properties);
  };
  return reports;
};