const { join } = require('path')

const ServiceWorker = app => (req, res) => {
  const filePath = join(__dirname, '../', '.next', 'service-worker.js')

  app.serveStatic(req, res, filePath)
}

module.exports = ServiceWorker
