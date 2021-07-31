const Channel = require('../models/channel')

const renderChannels = async (req, res) => {
	const channels = await Channel.find().lean()
	res.render('channels/index', {
		channels: channels
	})
}

const renderEditForm = async (req, res) => {
	const channel = await Channel.findById(req.params.id)
	res.render('channels/editForm', channel)
}

const editChannel = async (req, res) => {
	const {_id, channel_name, channel_url} = req.body
	await Channel.findByIdAndUpdate(_id, {name: channel_name, url: channel_url})
	res.redirect('/channels')
}

const deleteChannel = async (req, res) => {
	await Channel.findByIdAndDelete(req.body._id)
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
	renderEditForm,
	editChannel,
	deleteChannel,
	newChannel
}