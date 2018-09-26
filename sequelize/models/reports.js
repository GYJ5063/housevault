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

    reports.hasMany(models.comparable_properties);

    reports.hasOne(models.local_property_type_statistic);
    reports.hasOne(models.predict_price_5y);
  };
  return reports;
};