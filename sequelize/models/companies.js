'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(10).UNSIGNED
    },
    name: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {});
  companies.associate = function(models) {
    companies.hasMany(models.users, { foreignKey: 'company_id' });
  };
  return companies;
};