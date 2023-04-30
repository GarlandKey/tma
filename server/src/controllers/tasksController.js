const bodyParser = require('body-parser')
const Task = require('../models/TasksModel')

module.exports = {
    getTasks: async (req, res) => {
        try {
            const tasks = await Task.find()
            res.json(tasks)
        } catch(err) {
            console.error(err)
			res.status(500).json({ error: err.message })
        }
    },
    createTask: async (req, res) => {
        try {
			console.log(req.body) //todo delete
            const task = new Task({
				title: req.body.title,
				description: req.body.description,
				status: req.body.status
			})
			await task.save()
			res.json(task)
        } catch(err) {
            console.error(err)
			res.status(500).json({ error: err.message })
        }
    },
	updateTask: async (req, res) => {
        try {
			const task = await Task.findByIdAndUpdate(req.params.id)
			res.json(task)
        } catch(err) {
            console.error(err)
			res.status(500).json({ error: err.message })
        }
    },
    deleteTask: async (req, res) => {
        try {
			const task = await Task.findByIdAndDelete(req.params.id)
			res.json({ message: 'Task deleted successfully' })
        } catch(err) {
            console.error(err)
			res.status(500).json({ error: err.message })
        }
    }
}