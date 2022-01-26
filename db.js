const fs = require('fs');
module.exports = class DB {
    path = '';
    constructor(path) {
        this.path = path;
    }
    get_json () {
        return fs.readFileSync(this.path, {encoding: 'utf-8'});
    }
    get () {
        return JSON.parse(this.get_json());
    }
}