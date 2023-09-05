
const taskModel = require("../models/task");


class Task {
  async addTask(info) {
    await taskModel.create(info);
  }
  async getTask() {
    return taskModel.find();
  }
  async updateTask(id, updatedInfo) {
    return taskModel.findByIdAndUpdate(id, updatedInfo);
  }






  async deleteTask(id) {
    return taskModel.findByIdAndDelete(id);
  }

  async searchTask(query) {
    return taskModel.find({ name: { $regex: query } });
  }



  
  async getTaskById(id) {
    return taskModel.findById(id);
  }

  async getTaskByName(name) {
    return taskModel.find({ name: name });
  }

 
}

module.exports = Task;