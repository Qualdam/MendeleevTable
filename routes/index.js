const express = require('express');
const router = express.Router();
const path = require('path');
const db = new (require('../db'))(path.join(__dirname, '..', 'table.json'));
const map = new (require('../db'))(path.join(__dirname, '..', 'map.json'));
const periods = [
    'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'
];
const t = db.get();
const t2 = map.get();
const js = {}, ts = [];
for (let i = 0; i < t.length; ++i) {
    ts.push([]);
    for (let j = 0; j < t[i].length; ++j) {
        js[(Number)(t[i][j].number)] = t[i][j];
        js[(Number)(t[i][j].number)]["color"] = t2[t[i][j]['type']];
        ts[i].push(js[(Number)(t[i][j].number)]);
    }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { table: ts, periods, json: JSON.stringify(js) });
});

module.exports = router;
