const { Router } = require('express')
const { renderChannels, newChannel, deleteChannel } = require('../controllers/channels.controllers')

const router = Router()

router.get('/channels', renderChannels)
router.post('/channels/newChannel', newChannel)

router.delete('/channels/deleteChannel', deleteChannel)
module.exports = router