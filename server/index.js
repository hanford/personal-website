const express = require('express')
const debug = require('debug')('app')
const assert = require('assert')
const next = require('next')
const { join } = require('path')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

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
  const Renderer = render(app)

  if (!dev) {
    server.get('*', (_, res, next) => {
      res.setHeader('Cache-Control', 'max-age=86400, immutable')
      next()
    })
  }

  cachedRoutes.forEach(route => {
    server.get(route, (req, res) => Renderer(req, res, route))
  })

  server.get('/service-worker.js', ServiceWorker(app))

  server.get('*', (req, res) => {
    return handle(req, res)
  })
})

const ServiceWorker = app => (req, res) => {
  const filePath = join(__dirname, '../', '.next', 'service-worker.js')

  app.serveStatic(req, res, filePath)
}

server.listen(config.PORT, err => {
  if (err) throw err

  debug(`> Ready on http://localhost:${config.PORT}`)
})
