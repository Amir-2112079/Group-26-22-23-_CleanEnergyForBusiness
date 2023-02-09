const express = require('express');
const server = express();
const cors = require('cors');

//enviroment variables to avoid hard coding the cridentials
require('dotenv').config();

const mysql = require('mysql2');


const DB = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

//used to allow the server to get data from other ports
server.use(cors({
    origin: 'http://localhost:3000'
}))

//used to get data in JSON format
server.use(express.json());

server.get('/checkUser/:username', (req, res) => {
    const query = `SELECT * FROM userTable WHERE username = '${req.params.username}'`;
    DB.query(query, (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (results.length > 0) {
            return res.send('User exists');
        }
        return res.send('User does not exist');
    });
});


server.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const reg = `INSERT INTO userTable (username, email, password) VALUES (?,?,?)`;
    DB.query(reg, [username, email, password], (error) => {
        if (error) throw error;
        res.send('User registered successfully');
    });
});


server.post('/login', (req, res) => {
    const { username, password } = req.body;
    const log = `SELECT * FROM userTable WHERE username = ? AND password = ?`;
    DB.query(log, [username, password], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            return res.send('Logged in successfully');
        } else {
            return res.send('Login was unsuccessful');
        }

    });
});

server.listen(4000, () => {
    console.log('Server listening on port 4000');
});

