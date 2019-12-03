const mysql = require('mysql2');

const   pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodecomplete',
    password:'kapil'
});

module.exports = pool.promise(); // special export