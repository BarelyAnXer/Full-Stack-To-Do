import Task from '../Models/Task.js'

export async function createTask(req, res) {
    const { title, body } = req.body;

    try {
        const task = new Task({ title, body })

        await task.save()
        res.send({
            "status": "success",
            "message": "Data successfully inserted",
            "data": task
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            "status": "error",
            "message": "Failed to save task",
            "error": error.message
        });
    }
}

export async function getAllTask(req, res) {
    const tasks = await Task.find({})
    res.send(tasks)
}

export async function getTask(req, res) {
    const id = req.params.id;
    try {
        const tasks = await Task.find
        res.send({
            "status": "success",
            "message": "Data successfully inserted",
            "data": task
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            "status": "error",
            "message": "Failed to save task",
            "error": error.message
        });
    }
    
    res.send(id)
}

export async function updateTask(req, res) {
    res.send("")
}

export async function deleteTask(req, res) {
    res.send("")
}
