const express = require('express');
const Sequelize = require('sequelize');

const connection = new Sequelize('housevault_min', 'root', 'new_password', {
    dialect: 'mysql',
    define: {
        // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps
        timestamps: false
    }
});

const addresses = connection.import(`../sequelize/models/addresses.js`)
const router = express.Router();

router.get("/address/:id", (req, res) => {
    console.log(`${__dirname}/models/addresses.js`);
    //make sure you use false here. otherwise the total data 
    //from the impported models will get deleted and new tables will be created
    connection.sync({ force: false }).then(() => {
        addresses.findById(req.params.id)
        .then(result => res.json(result))
        .catch(err => console.log(err));
    });
});

module.exports = router;