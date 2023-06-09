/***
 * Initializes database 
 * Author: Garland Key <hello@garlandkey.com>
 ***/ 

const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL, { 
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB