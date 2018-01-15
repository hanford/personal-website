const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const { ANALYZE } = process.env

const AnalyzeOpts = {
  analyzerMode: 'server',
  analyzerPort: 8888,
  openAnalyzer: true
}

const AnalyzeGetStats = {
  statsFilename: 'stats.json',
  analyzerMode: 'disabled',
  generateStatsFile: true
}

module.exports = {
  webpack: function (config, { dev }) {
    if (!dev) {
      // remove this once this is resolved: https://github.com/zeit/next.js/issues/1195
      config.plugins = config.plugins.filter(p => p.constructor.name !== 'UglifyJsPlugin')
      config.plugins.push(
        new UglifyJSPlugin({
          parallel: true
        })
      )
    }

    if (ANALYZE) {
      const opts = ANALYZE === 1 ? AnalyzeOpts : AnalyzeGetStats

      config.plugins.push(new BundleAnalyzerPlugin(opts))
    }

    return config
  }
}
