const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')


passport.use(new LocalStrategy(async (username, done) => {
	const user = await User.findOne({username: username})
	if (!user) {
		return done(null, false, {errors: 'Incorrect username'})
	}
	
	return done(null, user)
}))

passport.serializeUser((user, done) => {
	done(null, user.id)
})

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user)
	})
})