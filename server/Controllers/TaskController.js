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
    try {
        const tasks = await Task.find({})
        res.send({
            "status": "success",
            "message": "Data successfully Get",
            "data": tasks
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

export async function getTask(req, res) {
    const documentID = req.params.id;
    try {
        const task = await Task.findById(documentID)
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

export async function updateTask(req, res) {
    const documentID = req.params.id;
    const { title, body } = req.body;
    try {

        // const task = await Task.findOneAndUpdate({ _id: documentID }, { body: body, title: title }, {
        //     new: true
        // })
        // no diff

        const task = await Task.findByIdAndUpdate(documentID, { body: body, title: title }, {
            new: true
        })

        console.log(task)
        res.send({
            "status": "success",
            "message": "Task successfully updated",
            "data": task
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            "status": "error",
            "message": "Failed to update task",
            "error": error.message
        });
    }
}

export async function deleteTask(req, res) {
    const documentID = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(documentID)
        res.send({
            "status": "success",
            "message": "Data successfully delete",
            "data": task
        })
    } catch (error) {
        console.log(error)
        res.status(400).send({
            "status": "error",
            "message": "Failed to Delete task",
            "error": error.message
        });
    }
}
