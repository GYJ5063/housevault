'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('regional_house_type_price_5y', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(10).UNSIGNED
      },
      report_id: {
        allowNull: false,
        references: {
          model: 'reports',
          key: 'id'
        },
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      house_type: {
        type: Sequelize.ENUM,
        values: ['DetachedPrice', 'FlatPrice', 'SemiDetachedPrice', 'TerracedPrice']
      },
      index_1: {
        type: Sequelize.INTEGER(11)
      },
      index_2: {
        type: Sequelize.INTEGER(11)
      },
      index_3: {
        type: Sequelize.INTEGER(11)
      },
      index_4: {
        type: Sequelize.INTEGER(11)
      },
      index_5: {
        type: Sequelize.INTEGER(11)
      },
      index_6: {
        type: Sequelize.INTEGER(11)
      },
      index_7: {
        type: Sequelize.INTEGER(11)
      },
      index_8: {
        type: Sequelize.INTEGER(11)
      },
      index_9: {
        type: Sequelize.INTEGER(11)
      },
      index_10: {
        type: Sequelize.INTEGER(11)
      },
      index_11: {
        type: Sequelize.INTEGER(11)
      },
      index_12: {
        type: Sequelize.INTEGER(11)
      },
      index_13: {
        type: Sequelize.INTEGER(11)
      },
      index_14: {
        type: Sequelize.INTEGER(11)
      },
      index_15: {
        type: Sequelize.INTEGER(11)
      },
      index_16: {
        type: Sequelize.INTEGER(11)
      },
      index_17: {
        type: Sequelize.INTEGER(11)
      },
      index_18: {
        type: Sequelize.INTEGER(11)
      },
      index_19: {
        type: Sequelize.INTEGER(11)
      },
      index_20: {
        type: Sequelize.INTEGER(11)
      },
      index_21: {
        type: Sequelize.INTEGER(11)
      },
      index_22: {
        type: Sequelize.INTEGER(11)
      },
      index_23: {
        type: Sequelize.INTEGER(11)
      },
      index_24: {
        type: Sequelize.INTEGER(11)
      },
      index_25: {
        type: Sequelize.INTEGER(11)
      },
      index_26: {
        type: Sequelize.INTEGER(11)
      },
      index_27: {
        type: Sequelize.INTEGER(11)
      },
      index_28: {
        type: Sequelize.INTEGER(11)
      },
      index_29: {
        type: Sequelize.INTEGER(11)
      },
      index_30: {
        type: Sequelize.INTEGER(11)
      },
      index_31: {
        type: Sequelize.INTEGER(11)
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('regional_house_type_price_5y');
  }
};