/***
 * RESTful API Router
 *   
 *   CRUD   | DESCRIPTION        | URI
 * 
 *   GET      Read all tasks       /tasks
 *   GET      Read a single task   /tasks/:id
 *   POST     Create new task      /tasks
 *   PUT      Update a task        /tasks/:id
 *   DELETE   Delete a task        /tasks/:id
 *  
 * Author: Garland Key <hello@garlandkey.com>
***/

const express = require('express')
const router = express.Router()
const tasksController = require('../controllers/tasksController')

router.get('/tasks', tasksController.getTasks)

router.get('/tasks/:id', tasksController.getTask)

router.post('/tasks', tasksController.createTask)

router.put('/tasks/:id', tasksController.updateTask)

router.delete('/tasks/:id', tasksController.deleteTask)

module.exports = router