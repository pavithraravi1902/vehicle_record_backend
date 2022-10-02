const sql = require('mysql');
const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'vehicle_db'
})

connection.connect(function (err){
    if(err){ throw err};
    console.log("connected");
})

module.exports = {connection, sql};

