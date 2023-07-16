import Task from '../Models/Task.js'


export async function getAllTasks(req, res) {
    const tasks = await Task.find({})
    res.send(tasks)
}

export async function createTask(req, res) {
    res.send("get all task")
}
