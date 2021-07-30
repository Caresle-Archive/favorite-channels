const { Schema, model } = require('mongoose')

const channelSchema = new Schema({
	name: String,
	url: String
})

module.exports = model('Channel', channelSchema)