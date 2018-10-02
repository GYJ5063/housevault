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

// TODO: find out why associations aren't imported when connection.import is used
const reports = require('../sequelize/models').reports;
const predict_results = require('../sequelize/models').predict_results;

const router = express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

router.get("/address/:id", (req, res) => {
    //make sure you use false here. otherwise the total data 
    //from the imported models will get deleted and new tables will be created
    connection.sync({ force: false }).then(() => {
        addresses.findById(req.params.id)
            .then(result => res.json(result))
            .catch(err => console.log(err));
    });
});

router.post("/createReport", (req, res) => {
    connection.sync({ force: false }).then(() => {
        const report = {
            //comparable_properties: _.values(req.body.comparable_properties),
            //sales_history_analyze: _.values(req.body.sales_history_analyze),
            local_property_type_statistic: req.body.local_property_type_statistic,
            // predict_price_5y: req.body.predict_price_5y,
            //predict_results: req.body.predict_results
            // predict_results: {
            //     band: '0.134',
            //     confidence_level: '6',
            //     exist_in_epc: 'true',
            //     lat: '51.63916499',
            //     lng: '-1.86261753',
            //     predict_price: '300500',
            //     predict_price_low: '260500',
            //     predict_price_up: '341000',
            //     probability: '0.646'
            // }
        };
        // console.log(reports.associations);
        // console.log(predict_results.associations);
        // Object.keys(reports).forEach(k => console.log(`${k} : ${reports[k]}`));
        reports.create(report, {
            include: [{ all: true }]
        })
        .then(result => res.json(result))
        .catch(err => console.log(err));
    });
});

module.exports = router;