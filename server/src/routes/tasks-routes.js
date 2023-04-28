const express = require('express')
const router = express.Router()
const taskController = require('../controllers/tasks-controller')

router.get('/tasks', taskController.getTasks)

router.post('/tasks', taskController.createTask)

router.put('/tasks/:id', taskController.updateTask)

router.delete('/delete', taskController.deleteTask)

module.exports = router