import express from 'express';
import { getUser, getUserId, addUser } from './index.js';

//using express "5" becuse it allows better options for error handling
const app = express()
//takes json body into the req.body object
app.use(express.json())

//using getUser to see all the data in the DB
app.get("/user", async (req, res) => {
    const checkUser = await getUser()
    res.send(checkUser)
})

//using getUserId to view only the selected data 
//to use user/id No
app.get("/user/:id", async (req, res) => {
    const id = req.params.id
    const checkUserId = await getUserId(id)
    res.send(checkUserId)
})

app.post("/user", async (req, res) => {
    const { username, email, password } = req.body
    const createUser = await addUser(username, email, password)
    //201 shows a message that says user is added
    res.status(201).send(createUser)
})


app.listen(4000, () => {
    console.log('Server is running on port 4000')
})