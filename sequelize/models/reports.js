'use strict';
module.exports = (sequelize, DataTypes) => {
  const reports = sequelize.define('reports', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }
  }, { timestamps: false });

  reports.associate = function(models) {
    reports.hasMany(models.comparable_properties, { foreignKey: 'report_id' });
    reports.hasMany(models.sales_history_analyze, { as: 'sales_history_analyze', foreignKey: 'report_id' });

    // TODO: need to handle regional here

    reports.hasOne(models.local_property_type_statistic, { foreignKey: 'report_id' });
    // reports.hasOne(models.predict_price_5y);
    reports.hasOne(models.predict_results, { as: 'predict_results', foreignKey: 'report_id' });
  };
  return reports;
};