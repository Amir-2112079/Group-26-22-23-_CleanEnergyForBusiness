import express from 'express';


const app = express()
app.get('/user', (req, res) => {
    res.send("should be running")
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Can't connect")
})

app.listen(3306, () => {
    console.log("it's running on port 3306")
})