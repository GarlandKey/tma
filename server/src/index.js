require('dotenv').config({ path: "./server/src/config/.env" })
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

connectDB()

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))

app.use(express.json()) 

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})