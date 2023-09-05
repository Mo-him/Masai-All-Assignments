const express = require("express");
const router = require("./routes/users");
require("./db/connect")

const app = express();
app.use('/',router)
const port =  8000;
app.get("/", (req, res) => {
    res.send("Hello World Express");
})

app.listen(port, () => {
    console.log(`Connection is setup at port no ${port} `)
})