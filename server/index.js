const express = require('express');
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');
const _ = require("lodash");

const config = require('../sequelize/config/config.json');
const env = process.env.NODE_ENV === 'production' ? 'production' : "development";
const { database, username, password, dialect, host } = config[env];


const connection = new Sequelize(database, username, password, {
    dialect: dialect,
    host: host,
    define: {
        // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps
        timestamps: false,
        underscored: true
    }
});

const addresses = connection.import(`../sequelize/models/addresses.js`);

const router = express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

// routes
const valuations = require('./valuations');


router.use('/valuations', valuations);

router.get("/address/:id", (req, res) => {
    //make sure you use false here. otherwise the total data 
    //from the imported models will get deleted and new tables will be created
    connection.sync({ force: false }).then(() => {
        addresses.findById(req.params.id)
            .then(result => res.json(result))
            .catch(err => console.log(err));
    });
});

module.exports = router;