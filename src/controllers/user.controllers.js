const User = require('../models/user')
const bcrypt = require('bcrypt')

const renderSignIn = (req, res) => {
	res.render('user/signin')
}

const signIn = async (req, res, next) => {
	const user = await User.findOne({username: req.body.username}).lean()
	const err = []
	
	// if (!user) {
	// 	err.push({error: 'User doesn\'t exist'})
	// 	res.render('user/signin', {errors: err})
	// 	return next(err)
	// }

	bcrypt.compare(req.body.password, user.password, (error, result) => {
		if(result) {
			res.send('send')
		} else {
			err.push({error: 'Password incorrect'})
			res.render('user/signin', {errors: err, username: req.body.username})
			return next(err)
		}
	})
}

const renderSignUp = (req, res) => {
	res.render('user/signup')
}

const createUser = async (req, res, next) => {
	const { fullname_input, username, email_input, password_input, password_input_2 } = req.body
	const userExist = await User.findOne({username: username}).lean()
	const err = []

	if (userExist) {
		err.push({error: 'User already exist'})
	}

	if (password_input !== password_input_2) {
		err.push({error: 'Password doesn\'t match'})
	}

	if (err.length >= 1) {
		res.render('user/signup', {errors: err, fullname_input, username, email_input})
		return next(err)
	}

	const pass = await bcrypt.hash(req.body.password_input, 12)
	await User.create({
		name: req.body.fullname_input,
		username: req.body.username,
		email: req.body.email_input,
		password: pass
	})
	res.redirect('/signin')
}

module.exports = {
	renderSignIn,
	renderSignUp,
	signIn,
	createUser
}