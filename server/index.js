const express = require('express');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'new_password',
    database: 'housevault_min'
});

connection.connect();

const router = express.Router();

router.get("/address/:id", (req, res) => {
    connection.query(`SELECT * FROM addresses WHERE id = ${req.params.id}`, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

module.exports = router;