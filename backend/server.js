const express = require("express");
const app = express();
const mysql = require("mysql");
const db = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'secret',
    database: 'my_db'
});


app.listen(3001, (req, res) => {
    console.log("The server is running..");
});