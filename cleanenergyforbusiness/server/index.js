const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "172.31.82.192",
    user: "G_26",
    password: "0qAps7dOg8",
    database: "G_26_DB",
});

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(express.json());


app.get('/checkUser/:username', (req, res) => {
    const query = `SELECT * FROM userTable WHERE username = '${req.params.username}'`;
    connection.query(query, (error, results) => {
        if (error) {
            return res.status(500).send(error);
        }
        if (results.length > 0) {
            return res.send('User exists');
        }
        return res.send('User does not exist');
    });
});


app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    const reg = `INSERT INTO userTable (username, email, password) VALUES (?,?,?)`;
    connection.query(reg, [username, email, password], (error) => {
        if (error) throw error;
        res.send('User registered successfully');
    });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const log = `SELECT * FROM userTable WHERE username = ? AND password = ?`;
    connection.query(log, [username, password], (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            return res.send('Logged in successfully');
        } else {
            return res.send('Login was unsuccessful');
        }

    });
});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});





/*
app.get('/user', (req, res) => {
    const { username } = req.body;
    const checkUser = `SELECT * FROM userTable WHERE username = ?`;
    connection.query(checkUser, [username], (error, results) => {
        if (error) throw error;

        if (!results.length > 0) {
            res.send(true)
        } else {
            res.send(false)
        }
    })
})
*/