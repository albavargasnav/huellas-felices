/* eslint-disable no-unused-vars */
'use strict'

const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const jwtAuth = require('./lib/jwtAuth')
const LoginController = require('./controllers/LoginController')
const PrivateController = require('./controllers/PrivateController')
const session = require('express-session')
const sessionAuth = require('./middleware/sessionAuthMiddleware')

require('dotenv').config() // inicializamos variables de entrono desde el fichero .env

const i18n = require('./lib/i18nSetup')

// Connect DB & register models
require('./models')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

if (process.env.LOG_FORMAT !== 'nolog') {
  app.use(logger(process.env.LOG_FORMAT || 'dev'))
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(i18n.init)
app.use(session({
  name: 'nodeapp-session',
  secret: 'as78dbas8d7bva6sd6vas',
  saveUninitialized: true,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 2 // expira a los 2 días de inactividad
  }
}))

// API v1
app.use('/apiv1/authenticate', require('./routes/apiv1/authenticate'))
app.use('/apiv1/anuncios', jwtAuth(), require('./routes/apiv1/anuncios'))

// Global Template variables
app.locals.title = 'Huellas Felices'

const loginController = new LoginController()
const privadoController = new PrivateController()

// Web
app.use('/', require('./routes/index'))
app.use('/anuncios', require('./routes/anuncios'))
app.get('/login', loginController.index)
app.post('/login', loginController.post)
app.get('/privado', sessionAuth, privadoController.index)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error(__('not_found'))
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  if (err.array) { // validation error
    err.status = 422
    const errInfo = err.array({ onlyFirstError: true })[0]
    err.message = isAPI(req)
      ? { message: __('not_valid'), errors: err.mapped() }
      : `${__('not_valid')} - ${errInfo.param} ${errInfo.msg}`
  }

  // establezco el status a la respuesta
  err.status = err.status || 500
  res.status(err.status)

  // si es un 500 lo pinto en el log
  if (err.status && err.status >= 500) console.error(err)

  // si es una petición al API respondo JSON...
  if (isAPI(req)) {
    res.json({ success: false, error: err.message })
    return
  }

  // ...y si no respondo con HTML...

  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.render('error')
})

function isAPI (req) {
  return req.originalUrl.indexOf('/api') === 0
}

module.exports = app
