const Sequelize = require('sequelize');

const config = require('../sequelize/config/config.json');
const env = process.env.NODE_ENV === 'production' ? 'production' : "development";
const { database, username, password, dialect, host } = config[env];

const connection = new Sequelize(database, username, password, {
    dialect: dialect,
    host: host,
    define: {
        // true by default. false because by default sequelize adds createdAt, modifiedAt columns with timestamps
        timestamps: false,
        underscored: true
    }
});

module.exports = connection;