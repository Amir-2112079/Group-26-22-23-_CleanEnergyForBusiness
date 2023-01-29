import mysql from 'mysql2'
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
//to use promise API rather than callback functions


export async function getUser() {
    //to get rid of unwanted metadata we uses '[]'
    const [rows] = await pool.query("SELECT * FROM userTable")
    return rows
}

export async function getUserId(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM userTable 
    WHERE id = ?
    `, [id])
    return rows[0]
}
//passing users info as a paramiter then adding them as an array
export async function addUser(username, email, password) {
    const result = await pool.query(`
    INSERT 
    INTO userTable
    (username,email,password)
    VALUES (?,?,?)
    `, [username, email, password])
    return result
}

const userstat = await getUserId(3)
console.log(userstat);