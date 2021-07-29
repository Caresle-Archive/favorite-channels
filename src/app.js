require('dotenv').config()
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000

// routes
const indexRoutes = require('./routes/index.routes')

app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', exphbs({
	defaultLayout: 'main',
	layoutsDir: path.join(app.get('views'), 'layouts'),
	extname: '.hbs'
}))
app.set('view engine', 'hbs')

app.use(indexRoutes)

app.listen(PORT, () => {
	console.log(`Server on PORT ${PORT}`)
})