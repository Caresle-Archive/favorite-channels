const { Router } = require('express')
const { renderChannels } = require('../controllers/channels.controllers')

const router = Router()

router.get('/channels', renderChannels)

module.exports = router