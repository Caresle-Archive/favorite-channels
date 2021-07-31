require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

require('./db')

// import routes
const indexRoutes = require('./routes/index.routes')
const channelsRoutes = require('./routes/channels.routes')
const userRoutes = require('./routes/user.routes')

app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	partialsDir: path.join(app.get('views'), 'partials'),
	extname: '.hbs'
}))
app.set('view engine', 'hbs')

// middlewares
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false}))

// routes
app.use(indexRoutes)
app.use(channelsRoutes)
app.use(userRoutes)

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res) => {
	res.render('404')
})

app.listen(PORT, () => {
	console.log(`Server on PORT ${PORT}`)
})