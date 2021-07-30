require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

// import routes
const indexRoutes = require('./routes/index.routes')
const channelsRoutes = require('./routes/channels.routes')
const userRoutes = require('./routes/user.routes')

app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	extname: '.hbs'
}))
app.set('view engine', 'hbs')

// routes
app.use(indexRoutes)
app.use(channelsRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
	console.log(`Server on PORT ${PORT}`)
})