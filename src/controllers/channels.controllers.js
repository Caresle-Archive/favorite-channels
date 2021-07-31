const Channel = require('../models/channel')

const renderChannels = async (req, res) => {
	const channels = await Channel.find().lean()
	res.render('channels/index', {
		channels: channels
	})
}

const deleteChannel = async (req, res) => {
	await Channel.findOneAndDelete({name: req.body.name, url: req.body.url})
	res.redirect('/channels')
}

const newChannel = async (req, res) => {
	const newChannelInfo = {
		name: req.body.channel_name,
		url: req.body.channel_url 
	}
	await Channel.create(newChannelInfo)
	res.redirect('/channels')
}

module.exports = {
	renderChannels,
	deleteChannel,
	newChannel
}