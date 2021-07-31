const { Router } = require('express')
const { 
	renderChannels,
	renderEditForm,
	editChannel,
	newChannel,
	deleteChannel
} = require('../controllers/channels.controllers')

const router = Router()

router.get('/channels', renderChannels)
router.get('/channels/editForm/:id', renderEditForm)
router.post('/channels/newChannel', newChannel)
router.put('/channels/editChannel', editChannel)

router.delete('/channels/deleteChannel', deleteChannel)
module.exports = router