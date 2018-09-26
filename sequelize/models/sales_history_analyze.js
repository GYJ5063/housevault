'use strict';
module.exports = (sequelize, DataTypes) => {
  const sales_history_analyze = sequelize.define('sales_history_analyze', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10).UNSIGNED
    },
    report_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
          model: "reports",
          key: "id"
      }
    },
    price_chage_percent: DataTypes.DECIMAL(7, 4),
    price_change: DataTypes.INTEGER(11),
    sold_date: DataTypes.DATE,
    sold_price: DataTypes.INTEGER(11)
  }, {});
  sales_history_analyze.associate = function(models) {
    // associations can be defined here
  };
  return sales_history_analyze;
};