const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({ 
   taskName: String,
   status: String,
   tags: []
})

const taskModel = mongoose.model('Task', taskSchema, 'task') 

module.exports = taskModel