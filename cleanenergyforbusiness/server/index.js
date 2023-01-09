const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host: "172.31.82.192",
    user: "G_26",
    password: "0qAps7dOg8",
    database: "G_26_DB",
});

app.get("/", (req, res) => {
    const sqlInsert =
        "INSERT INTO userTable (username, email, password) VALUES ('amir', 'amir@gmail', '7980');";
    db.query(sqlInsert, (err, result) => {
        res.send("ur data should be in the db!");
    });
});

app.listen(3001, () => {
    console.log("Running of port 3001");
});

