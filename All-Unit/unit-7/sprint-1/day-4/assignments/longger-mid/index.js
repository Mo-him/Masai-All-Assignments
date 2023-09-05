const  express = require('express')

const morgan = require('morgan')

const app =express()
morgan(':method :url :status :res[content-length] - :response-time ms')

morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, 'content-length'), '',
      tokens['response-time'](req, res), 'ms'
    ]
  })
  app.get("/text",morgan(),(req,res) => {
    res.send('morgan ')
  
  })
  

  app.listen(3000, ()=>{
    console.log('server is running on port 3000')
  })