const express = require('express');
const router = express.Router();
const _ = require("lodash");

const connection = require('./connection');

// TODO: find out why associations aren't imported when connection.import is used
const reports = require('../sequelize/models').reports;

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