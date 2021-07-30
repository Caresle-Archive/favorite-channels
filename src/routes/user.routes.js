const { Router } = require('express')
const { renderSignIn, renderSignUp } = require('../controllers/user.controllers')
const router = Router()

router.get('/signin', renderSignIn)
router.get('/signup', renderSignUp)

module.exports = router