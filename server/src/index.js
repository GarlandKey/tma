require('dotenv').config({ path: "./src/config/.env" })
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const tasksRoutes = require('./routes/tasksRoutes')

const PORT = process.env.PORT || 8000
const app = express()

// Dev
morgan('tiny')

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