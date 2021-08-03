const { Router } = require('express')
const { renderSignIn, renderSignUp, createUser, signIn } = require('../controllers/user.controllers')
const router = Router()

router.get('/signin', renderSignIn)
router.get('/signup', renderSignUp)

router.post('/signin/', signIn)
router.post('/signup/', createUser)

module.exports = router