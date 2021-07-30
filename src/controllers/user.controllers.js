const renderSignIn = (req, res) => {
	res.render('user/signin')
}

const renderSignUp = (req, res) => {
	res.render('user/signup')
}

module.exports = {
	renderSignIn,
	renderSignUp
}