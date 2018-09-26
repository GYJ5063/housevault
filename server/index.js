const express = require('express');
const bodyParser = require("body-parser");
const Sequelize = require('sequelize');

const config = require('../sequelize/config/config.json');
const env = process.env.NODE_ENV === 'production' ? 'production' : "development";
const { database, username, password, dialect, host } = config[env];


const connection = new Sequelize(database, username, password, {
    dialect: dialect,
    host: host,
    define: {
        // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps
        timestamps: false
    }
});

const addresses = connection.import(`../sequelize/models/addresses.js`);
const reports = connection.import(`../sequelize/models/reports.js`);

const router = express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get("/address/:id", (req, res) => {
    //make sure you use false here. otherwise the total data 
    //from the impported models will get deleted and new tables will be created
    connection.sync({ force: false }).then(() => {
        addresses.findById(req.params.id)
            .then(result => res.json(result))
            .catch(err => console.log(err));
    });
});

router.post("/createReport", (req, res) => {
    connection.sync({ force: false }).then(() => {
        reports.create(req.body)
            .then(result => res.json(result))
            .catch(err => console.log(err));
    });
});

module.exports = router;