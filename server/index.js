const express = require('express')
const debug = require('debug')('app')
const assert = require('assert')

const config = require('./config')
const render = require('./render')
const server = express()

server.use(render)

server.listen(config.PORT, err => {
  if (err) throw err

  debug(`> Ready on http://localhost:${config.PORT}`)
})
