'use strict';
module.exports = (sequelize, DataTypes) => {
  const comparable_properties = sequelize.define('comparable_properties', {
    id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    report_id: DataTypes.INTEGER(10).UNSIGNED,
    address_id: DataTypes.INTEGER(10).UNSIGNED,
    current_valuation: DataTypes.INTEGER,
    distance_to_query_property: DataTypes.INTEGER,
    sold_date: DataTypes.DATE,
    sold_price: DataTypes.INTEGER,
    rooms: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    house_type: DataTypes.STRING
  }, {});
  comparable_properties.associate = function(models) {
  };
  return comparable_properties;
};