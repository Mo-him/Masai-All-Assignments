const express = require('express');
const cors = require('cors');
const connectDB = require('./database/conn');
const { register, login, getLogedInUser } = require('./handlers/user');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(express.json())


app.post('/register',register)
app.post('/login',login)
app.get('/logedInUser',getLogedInUser)

connectDB()
app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})


