'use strict';
module.exports = (sequelize, DataTypes) => {
  const comparable_properties = sequelize.define('comparable_properties', {
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
    address_id: DataTypes.INTEGER(10).UNSIGNED,
    current_valuation: DataTypes.INTEGER(10).UNSIGNED,
    distance_to_query_property: DataTypes.INTEGER(10),
    sold_date: DataTypes.DATE,
    sold_price: DataTypes.INTEGER(10).UNSIGNED,
    rooms: DataTypes.INTEGER(3).UNSIGNED,
    size: DataTypes.INTEGER(5),
    house_type: DataTypes.STRING
  }, {});
  comparable_properties.associate = function(models) {
  };
  return comparable_properties;
};