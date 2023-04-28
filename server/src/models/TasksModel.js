const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
	enum: ['pending','in progress','completed'],
    required: true,
	default: 'pending'
  }
})

module.exports = mongoose.model('Task', taskSchema)