'use strict';
module.exports = (sequelize, DataTypes) => {
  const predict_results = sequelize.define('predict_results', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    report_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
          model: "reports",
          key: "id"
      }
    },
    band: DataTypes.DECIMAL(6, 4),
    confidence_level: DataTypes.INTEGER(4),
    exist_in_epc: DataTypes.BOOLEAN,
    lat: DataTypes.DECIMAL(10, 6),
    lng: DataTypes.DECIMAL(10, 6),
    predict_price: DataTypes.INTEGER(11),
    predict_price_low: DataTypes.INTEGER(11),
    predict_price_up: DataTypes.INTEGER(11),
    probability: DataTypes.DECIMAL(5, 2)
  }, { timestamps: false });

  predict_results.associate = function(models) {
    predict_results.belongsTo(models.reports, { as: 'reports', foreignKey: 'report_id', targetKey: 'id' });
  };
  return predict_results;
};