const { Router } = require('express')
const { renderChannels, newChannel } = require('../controllers/channels.controllers')

const router = Router()

router.get('/channels', renderChannels)
router.post('/channels/newChannel', newChannel)

module.exports = router