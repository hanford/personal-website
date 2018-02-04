const express = require('express')
const debug = require('debug')('app')
const assert = require('assert')
const next = require('next')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()
const ServiceWorker = require('./service-worker')

const config = require('./config')
const render = require('./render')

const cachedRoutes = [
  '/projects',
  '/writing',
  '/instachrome',
  '/fast-flix',
  '/chirp',
  '/youtube-darkmode',
  '/uber-chrome',
  '/snapchat'
]

app.prepare().then(() => {
  cachedRoutes.forEach(route => {
    server.get(route, (req, res) => render(req, res, route))
  })

  server.get('/service-worker.js', ServiceWorker(app))

  server.get('*', (req, res) => {
    return handle(req, res)
  })
})

server.listen(config.PORT, err => {
  if (err) throw err

  debug(`> Ready on http://localhost:${config.PORT}`)
})
