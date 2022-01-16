const express = require('express');
const router = express.Router();
const path = require('path');
const db = new (require('../db'))(path.join(__dirname, '..', 'table.json'));
const periods = [
    'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'
];
const t = db.get();
const js = {};
for (let i = 0; i < t.length; ++i) {
    for (let j = 0; j < t[i].length; ++j) {
        js[(Number)(t[i][j].number)] = t[i][j];
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { table: db.get(), periods, json: JSON.stringify(js) });
});

module.exports = router;
