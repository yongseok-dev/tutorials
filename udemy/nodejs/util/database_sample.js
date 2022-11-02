const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "database"
})

module.exports = pool.promise()