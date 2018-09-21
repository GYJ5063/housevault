'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('local_property_type_statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      report_id: {
        type: Sequelize.INTEGER
      },
      Detached_num_ratio: {
        type: Sequelize.DECIMAL
      },
      Detached_average_value: {
        type: Sequelize.INTEGER
      },
      Detached_average_size: {
        type: Sequelize.INTEGER
      },
      Detached_per_size_value: {
        type: Sequelize.INTEGER
      },
      Semi_Detached_num_ratio: {
        type: Sequelize.DECIMAL
      },
      Semi_Detached_average_value: {
        type: Sequelize.INTEGER
      },
      Semi_Detached_average_size: {
        type: Sequelize.INTEGER
      },
      Semi_Detached_per_size_value: {
        type: Sequelize.INTEGER
      },
      Terrace_num_ratio: {
        type: Sequelize.DECIMAL
      },
      Terrace_average_value: {
        type: Sequelize.INTEGER
      },
      Terrace_average_size: {
        type: Sequelize.INTEGER
      },
      Terrace_per_size_value: {
        type: Sequelize.INTEGER
      },
      Flat_num_ratio: {
        type: Sequelize.DECIMAL
      },
      Flat_average_value: {
        type: Sequelize.INTEGER
      },
      Flat_average_size: {
        type: Sequelize.INTEGER
      },
      Flat_per_size_value: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('local_property_type_statistics');
  }
};