const { Router } = require('express')
const { renderSignIn, renderSignUp, createUser, signIn } = require('../controllers/user.controllers')
const router = Router()

router.get('/signin', renderSignIn)
router.get('/signup', renderSignUp)

router.post('/signin/user', signIn)
router.post('/signup/create', createUser)

module.exports = router