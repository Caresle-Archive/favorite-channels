const mongoose = require('mongoose')
const uri = process.env.MONGO_URI

mongoose.connect(uri)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', () => {
	console.log('db connected')
})