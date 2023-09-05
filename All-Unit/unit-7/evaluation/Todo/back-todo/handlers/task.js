const Task = require("../controller/task");




const task = new Task();

async function createTask(req, res) {
  const info = req.body;

  await task.addTask(info);

  res.send({
    message: "  Task has been added",
  });
}






async function allTask(req, res) {
  try {
    const tasks = await task.getTask();

    res.status(200).send(tasks);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}





async function editTask(req, res) {
  const id = req.params.id;

  const updatedInfo = req.body;

  await task.updateTask(id, updatedInfo);

  return res.status(200).send({
    message: "Task updated successfully",
  });
}
async function removeTask(req, res) {
  const id = req.params.id;

  try {
    await task.deleteTask(id);

    return res.send({
      message: "Task has been deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}







async function findTask(req, res) {
  try {
    const query = req.params.query;

    const info = await task.searchTask(query);

    res.status(200).send(info);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
}






async function findTaskById(req, res) {
  const id = req.params.id;

  const info = await task.getTaskById(id);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "task does not exist.",
    });
  }
}






async function findTaskByName(req, res) {
  const name = req.params.name;

  const info = await task.getTaskByName(name);

  if (info) {
    return res.send({
      data: info,
    });
  } else {
    return res.status(404).send({
      message: "Task does not exist.",
    });
  }
}





module.exports = {
  createTask,
  allTask,
  editTask,
  removeTask,
  findTask,
  findTaskById,
  findTaskByName,
};