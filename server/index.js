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
        const regional_house_type_price_5y = Object.keys(req.body.regional_housetype_price_5y).map(k => {
            const ht = req.body.regional_housetype_price_5y[k];
            ht.house_type = k;
            return ht;
        });

        const report = {
            address_id: req.body.address_id,
            comparable_properties: _.values(req.body.comparable_properties),
            sales_history_analyze: _.values(req.body.sales_history_analyze),
            local_property_type_statistic: req.body.local_property_type_statistic,
            predict_price_5y: req.body.predict_price_5y,
            predict_results: req.body.predict_results,
            regional_price_5y: req.body.regional_price_5y,
            regional_house_type_price_5y: regional_house_type_price_5y
        };

        reports.create(report, {
            include: [{ all: true }]
        })
        .then(result => res.json(result))
        .catch(err => console.log(err));
    });
});

module.exports = router;