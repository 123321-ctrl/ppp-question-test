const mysql = require('mysql')

const db = mysql.createConnection({
    database: "question_test",
    user: "root",
    password: "123456",
    host: "localhost",
    port: 3306,

})
module.exports = db
