const express = require('express')
const next = require('next')
const LRUCache = require('lru-cache')
const debug = require('debug')('app')

const server = express()
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dir: '.', dev })
const handle = app.getRequestHandler()

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 10 // 10 hours
})

const cachedRoutes = [
  '/projects',
  '/writing'
]

function renderAndCache (req, res, pagePath, queryParams) {
  // If we have a page in the cache, let's serve it
  if (!dev && ssrCache.has(req.url)) {
    debug(`CACHE HIT: ${req.url}`)
    res.send(ssrCache.get(req.url))
    return
  }

  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // Let's cache this page
      debug(`CACHE MISS: ${req.url}`)
      ssrCache.set(req.url, html)

      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

app.prepare().then(() => {
  // Use the `renderAndCache` utility defined below to serve pages
  cachedRoutes.forEach(route => {
    server.get(route, (req, res) => renderAndCache(req, res, route))
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
})

module.exports = server
