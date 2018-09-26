'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('predict_results', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      report_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        references: {
            model: "reports",
            key: "id"
        }
      },
      band: {
        type: Sequelize.DECIMAL(6, 4)
      },
      confidence_level: {
        type: Sequelize.INTEGER(4)
      },
      exist_in_epc: {
        type: Sequelize.BOOLEAN
      },
      lat: {
        type: Sequelize.DECIMAL(10, 6)
      },
      lng: {
        type: Sequelize.DECIMAL(10, 6)
      },
      predict_price: {
        type: Sequelize.INTEGER(11)
      },
      predict_price_low: {
        type: Sequelize.INTEGER(11)
      },
      predict_price_up: {
        type: Sequelize.INTEGER(11)
      },
      probability: {
        type: Sequelize.DECIMAL(5, 2)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('predict_results');
  }
};