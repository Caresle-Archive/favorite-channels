const User = require('../models/user')
const bcrypt = require('bcrypt')

const renderSignIn = (req, res) => {
	res.render('user/signin')
}

const signIn = async (req, res) => {
	const { password } = await User.findOne({username: req.body.username}).lean()
	bcrypt.compare(req.body.password_input, password, (err, result) => {
		if(result) {
			res.send('send')
		} else {
			res.redirect('/signin')
		}
	})
}

const renderSignUp = (req, res) => {
	res.render('user/signup')
}

const createUser = async (req, res, next) => {
	const { username, password_input, password_input_2 } = req.body
	const userExist = await User.findOne({username: username}).lean()
	const err = []
	if (userExist) {
		err.push({error: 'User already exist'})
	}

	if (password_input !== password_input_2) {
		err.push({error: 'Password doesn\'t match'})
	}

	if (err.length >= 1) {
		res.redirect('/signup')
		return next(err)
	}
	
	const pass = await bcrypt.hash(req.body.password_input, 12)
	await User.create({
		name: req.body.fullname_input,
		username: req.body.username,
		email: req.body.email_input,
		password: pass
	})
	res.redirect('/signup')
}

module.exports = {
	renderSignIn,
	renderSignUp,
	signIn,
	createUser
}