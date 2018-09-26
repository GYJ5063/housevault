'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comparable_properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      report_id: {
        allowNull: false,
        references: { model: 'reports', key: 'id'},
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      address_id: {
        allowNull: false,
        references: { model: 'addresses', key: 'id'},
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      current_valuation: {
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      distance_to_query_property: {
        type: Sequelize.INTEGER(10)
      },
      sold_date: {
        type: Sequelize.DATE
      },
      sold_price: {
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      rooms: {
        type: Sequelize.INTEGER(3).UNSIGNED
      },
      size: {
        type: Sequelize.INTEGER(5)
      },
      house_type: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('comparable_properties');
  }
};