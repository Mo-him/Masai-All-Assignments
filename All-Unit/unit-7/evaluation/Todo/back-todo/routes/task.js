const express = require("express")



const {
    createTask,
    allTask,
    editTask,
    removeTask,
    findTask,
    findTaskById,
    findTaskByName,
} = require("../handlers/task")

const taskRouter = express.Router()
taskRouter.post("/todos", createTask)
taskRouter.get("/todos", allTask)
taskRouter.patch("/todos/:id", editTask)
taskRouter.delete("/todos/:id", removeTask)
taskRouter.get("/todos/:query", findTask)
taskRouter.get("/todos/id/:id", findTaskById)
taskRouter.get("/todos/name/:name", findTaskByName)

module.exports = taskRouter