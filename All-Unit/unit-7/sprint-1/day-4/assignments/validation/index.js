const express  = require('express')
const valid =require('./validation/valid')

const app =express()
app.use(express.json())
app.use(valid)

const detail =[]




app.post('/addDetail',(req,res) => {
   let userDetail = req.body
   try {
    detail.push(userDetail);
    res.send('detail added')
   } catch (error) {
    res.status(400).send('internal server error')
   }
})
app.get('/getDetail' , (req,res) => {
    res.send(detail);
})



app.listen(3020 , () => {
    console.log('server is running on port 3020');
})