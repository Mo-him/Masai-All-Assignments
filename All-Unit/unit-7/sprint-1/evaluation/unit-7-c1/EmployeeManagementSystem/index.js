


const express = require("express");
const app = express()
const port = 8000;
const fs = require("fs");



const name = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"]
const data = JSON.stringify(name);
var cowsay = require("cowsay");
const dns = require("dns");


app.get("/", (req, res) => {
    res.send("<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>")
})



app.get("/writeinfile", (req, res) => {
    fs.writeFile('employee.txt', "Employee name are as follows:", (err) => {
        console.log("files created")
        console.log(err)
        res.send("<h1>Data has been written in the file</h1>")
    });
})




app.get("/enternames", (req, res) => {
    fs.appendFile('employee.txt', data, (err) => {
        console.log("files created")
        console.log(err)
        res.send("<h1>All the names added in the file</h1>")
    });


})



app.get("/alldetails", (req, res) => {
    fs.readFile('employee.txt', "utf-8", (err, data) => {
        console.log(err)
        res.send();
    });
})



app.get("/address", (req, res) => {
    dns.lookup("www.masaischool.com", (err, address, family) => {
        console.log(address)
        console.log(family)
        res.send(address);
    })
})



app.get("/delete", (req, res) => {

    fs.unlink("employee.txt", (err) => {
        console.log(err);
        res.send("<h1>File has been deleted</h1>")
    })
})




function invalidError(req, res, next) {
    const error = new Error("PLS ENTER VALID URL");
    error.status = 404;
    next(error);
    res.send("<h1>PLEASE ENTER VALID URL</h1>")
}
app.use(invalidError);






app.listen(port, () => {
    console.log(`port is listening :${port}`);
})