const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('valuations hit!!!@')
});

module.exports = router;