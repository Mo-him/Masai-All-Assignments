const express = require('express');
const fs = require('fs');
const cowsay = require('cowsay');
const dns = require('dns');

const app = express();
app.get('/', (req, res) => {
  res.send('<h1>WELCOME TO EMPLOYEE MANAGEMENT SYSTEM</h1>');
});



app.get('/writeinfile', (req, res) => {
  fs.writeFile('employee.txt', 'Employee names are as follows:', (err) => {
    if (err) {
      console.log(err);
      res.send('<h1>Error Occured</h1>');
    } else {
      res.send('<h1>Data has been written in the file</h1>');
    }
  });
});



//EmployeeManagmentSyatem

app.get('/enternames', (req, res) => {
  let names = ["Aman", "Albert", "Varun", "Rajat", "Nrupul"];


  fs.appendFile('employee.txt', '\n' + names.join('\n'), (err) => {
    if (err) {
      console.log(err);
      res.send('<h1>Error Occured</h1>');
    } else {
      res.send('<h1>All the names added in the file</h1>');
    }
  });

});





app.get('/alldetails', (req, res) => {
  fs.readFile('employee.txt', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.send('<h1>Error Occured</h1>');
    } else {
      console.log(cowsay.say({
        text: data
      }));
      res.send('<h1>Check the terminal</h1>');
    }
  });
});




app.get('/address', (req, res) => {
  dns.lookup(process.argv[2], (err, address) => {
    if (err) {
      console.log(err);
      res.send('<h1>Error Occured</h1>');
    } else {
      res.send('<h1>The IP Address is ' + address + '</h1>');
    }
  });
});





app.get('/delete', (req, res) => {
  fs.unlink('employee.txt', (err) => {
    if (err) {
      console.log(err);
      res.send('<h1>Error Occured</h1>');
    } else {
      res.send('<h1>File has been deleted</h1>');
    }
  });
});




app.use((req, res) => {
  res.status(404).send('<h1>404 - Invalid Endpoint</h1>');
});





const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});