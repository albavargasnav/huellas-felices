'use strict'

const mongoose = require('mongoose')

mongoose.connection.on('error', function (err) {
  console.error('mongodb connection error:', err)
  process.exit(1)
})

mongoose.connection.once('open', function () {
  console.info('Connected to mongodb.')
})

const connectionPromise = mongoose.connect(process.env.MONGODB_CONNSTR, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})

module.exports = connectionPromise
