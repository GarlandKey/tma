require('dotenv').config({ path: "./server/src/config/.env" })
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const tasksRoutes = require('./routes/tasksRoutes')
const PORT = process.env.PORT || 8000

connectDB()

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(express.json()) 

app.use('/', tasksRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running!\nhttp://127.0.0.1:${PORT}`) // todo remove
})