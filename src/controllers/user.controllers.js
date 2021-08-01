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

const createUser = async (req, res) => {
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