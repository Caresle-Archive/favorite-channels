const Channel = require('../models/channel')

const renderChannels = (req, res) => {
	res.render('channels/index')
}

const newChannel = async (req, res) => {
	// const newChannelInfo = new Channel({
	// 	name: req.body.channel_name,
	// 	url: req.body.channel_url
	// })
	// newChannelInfo.save().then(() => res.redirect('/channels'))
	const newChannelInfo = {
		name: req.body.channel_name,
		url: req.body.channel_url 
	}
	await Channel.create(newChannelInfo)
	res.redirect('/channels')
}

module.exports = {
	renderChannels,
	newChannel
}