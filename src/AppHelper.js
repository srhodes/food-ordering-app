var indexRouter = require('./routes/index')
var authRouter = require('./routers/auth')
const { default: App } = require('./App')
const { appBarClasses } = require('@mui/material')

app.use('/', indexRouter)
app.use('/', authRouter)