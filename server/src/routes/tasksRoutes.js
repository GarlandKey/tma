const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController')

router.get('/tasks', tasksController.getTasks)

router.post('/tasks', tasksController.createTask)

router.put('/tasks/:id', tasksController.updateTask)

router.delete('/tasks/:id', tasksController.deleteTask)

module.exports = router