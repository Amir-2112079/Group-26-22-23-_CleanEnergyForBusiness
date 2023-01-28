import mysql from 'mysql2'
import { database } from './database';
import dotenv from 'dotenv'
dotenv.config()

//pool is used to connect all inputs into db 
//using environmental variables to avoid hard coding the informations
const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getUser() {
    //only get the table values instead of useless metadata
    const [rows] = await pool.query("SELECT * FROM userTable")
    return rows
}

//getting users by their id
async function getUserId(id) {
    const [rows] = await pool.query('SELECT * FROM userTable WHERE id = ?', [id])
    //to get a single object e.g.,one id at a time 
    return rows[0]
}

async function addUser(username, email, password) {
    const result = await pool.query('INSERT INTO userTable (username,email,password) VALUES (?,?,?)'
        , [username, email, password])

    return result
}

const result = await addUser('Max', 'Max@gmail.com', '7980')
console.log(result)







/*
const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
    // host: "172.31.82.192"
    host: "172.31.82.192",
    user: "G_26",
    password: "0qAps7dOg8",
    database: "G_26_DB"
});

db.connect(function (err) {
    if (err) throw err;
    var sql = "INSERT INTO userTable(username,email,password) VALUES('Amir','Amir@gmail.com','amir-t'"
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Added into DB");
        console.log(result)
    })
});

app.listen(3306, () => {
    console.log("Running on port 3306");
});

////////////////////////

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected")
    var sql = "INSERT INTO userTable (username,email,password) VALUES ?"
    var values = [
        ['amir', 'amir@gmail', '7980']
    ]

    connection.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Data Inserted to the DB" + result.affectedRows);
    })
})
*/