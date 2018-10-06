'use strict';
module.exports = (sequelize, DataTypes) => {
  const regional_price_5y = sequelize.define('regional_price_5y', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER(10).UNSIGNED
    },
    report_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
          model: "reports",
          key: "id"
      }
    },
    area_code: DataTypes.STRING,
    index_1: DataTypes.INTEGER(11),
    index_2: DataTypes.INTEGER(11),
    index_3: DataTypes.INTEGER(11),
    index_4: DataTypes.INTEGER(11),
    index_5: DataTypes.INTEGER(11),
    index_6: DataTypes.INTEGER(11),
    index_7: DataTypes.INTEGER(11),
    index_8: DataTypes.INTEGER(11),
    index_9: DataTypes.INTEGER(11),
    index_10: DataTypes.INTEGER(11),
    index_11: DataTypes.INTEGER(11),
    index_12: DataTypes.INTEGER(11),
    index_13: DataTypes.INTEGER(11),
    index_14: DataTypes.INTEGER(11),
    index_15: DataTypes.INTEGER(11),
    index_16: DataTypes.INTEGER(11),
    index_17: DataTypes.INTEGER(11),
    index_18: DataTypes.INTEGER(11),
    index_19: DataTypes.INTEGER(11),
    index_20: DataTypes.INTEGER(11),
    index_21: DataTypes.INTEGER(11),
    index_22: DataTypes.INTEGER(11),
    index_23: DataTypes.INTEGER(11),
    index_24: DataTypes.INTEGER(11),
    index_25: DataTypes.INTEGER(11),
    index_26: DataTypes.INTEGER(11),
    index_27: DataTypes.INTEGER(11),
    index_28: DataTypes.INTEGER(11),
    index_29: DataTypes.INTEGER(11),
    index_30: DataTypes.INTEGER(11),
    index_31: DataTypes.INTEGER(11),
    regionname: DataTypes.STRING
  }, { timestamps: false,  tableName: 'regional_price_5y'});
  regional_price_5y.associate = function(models) {
    regional_price_5y.belongsTo(models.reports, { foreignKey: 'report_id', targetKey: 'id' });
  };
  return regional_price_5y;
};