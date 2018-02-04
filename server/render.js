const LRUCache = require('lru-cache')
const debug = require('debug')('app')

// This is where we cache our rendered HTML pages
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 24 // 1 day
})

module.exports = function render (req, res, pagePath, queryParams) {
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
