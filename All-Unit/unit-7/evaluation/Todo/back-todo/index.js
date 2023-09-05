const express = require('express')
const connectDB = require("./database/db")
const taskRouter = require('./routes/task')
const app = express()


app.use(express.json())
app.use(taskRouter)


connectDB()


.then(() => {
    app.listen(3000, () => {
        console.log('Server is listening on http://localhost:3000')
    })
})