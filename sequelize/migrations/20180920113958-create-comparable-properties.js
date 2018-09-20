'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('comparable_properties', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER.UNSIGNED
      },
      report_id: {
        allowNull: false,
        references: { model: 'reports', key: 'id'},
        type: Sequelize.INTEGER.UNSIGNED,
      },
      address_id: {
        allowNull: false,
        references: { model: 'addresses', key: 'id'},
        type: Sequelize.INTEGER.UNSINGED,
      },
      current_valuation: {
        type: Sequelize.INTEGER
      },
      distance_to_query_property: {
        type: Sequelize.INTEGER
      },
      sold_date: {
        type: Sequelize.DATE
      },
      sold_price: {
        type: Sequelize.INTEGER
      },
      rooms: {
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.INTEGER
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