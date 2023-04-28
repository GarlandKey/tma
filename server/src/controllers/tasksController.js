const Task = require('../models/TasksModel')

module.exports = {
    getTasks: async (req,res) => {
        try {
            const tasks = await Task.find()
            res.send(tasks)
        } catch(error) {
            console.error(error)
        }
    },
    createTask: async (req, res) => {
        try {
            const task = new Task(req.body)
			const newTask = await task.save()
			res.status(201).json(newTask)
        } catch(error) {
            console.error(error)
        }
    },
	updateTask: async (req, res) => {
        try {
			const task = await Task.findById(req.params.id);
			if(!task) throw new Error('Task not found')
			Object.assign(task, req.body)
			const updatedTask = await task.save()
			res.json(updatedTask)
        } catch(error) {
            console.error(error)
        }
    },
    deleteTask: async (req, res) => {
        try {
			const task = await Task.findById(req.params.id)
			if(!task) throw new Error('Task not found')
			await task.remove()
			res.json({ message: 'Task deleted successfully' })
        } catch(error) {
            console.error(error)
        }
    }
}