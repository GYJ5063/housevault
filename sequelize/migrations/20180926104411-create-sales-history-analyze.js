'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales_history_analyzes', {
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
      price_chage_percent: {
        type: Sequelize.DECIMAL(7, 4)
      },
      price_change: {
        type: Sequelize.INTEGER(11)
      },
      sold_date: {
        type: Sequelize.DATE
      },
      sold_price: {
        type: Sequelize.INTEGER(11)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sales_history_analyzes');
  }
};