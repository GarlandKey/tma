/***
 * This is an MVC server with a CRUD API. Files, 
 * and directories are named semantically.
 *   
 *   CRUD   | DESCRIPTION        | URI
 * 
 *   GET      Read all tasks       /tasks
 *   GET      Read a single task   /tasks
 *   POST     Create new task      /tasks
 *   PUT      Update a task        /tasks/:id
 *   DELETE   Delete a task        /tasks/:id
 *  
 * Author: Garland Key <hello@garlandkey.com>
***/
require('dotenv').config({ path: "./src/config/.env" })
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const connectDB = require('./config/db')
const tasksRoutes = require('./routes/tasksRoutes')

const PORT = process.env.PORT || 8000
const app = express()

// Database
connectDB()

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Router
app.use('/', tasksRoutes)

// Start
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})