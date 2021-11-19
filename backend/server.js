const express = require("express");
const app = express();
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_db",
});

app.get("/register", (req, res) => {
  db.query(
    "INSERT INTO Users ('username', 'password') VALUES ('pedro', 'password')",
    (error, results) => res.send(results)
  );
});

app.listen(3001, (req, res) => {
  console.log("The server is running..");
});
