const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
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
      config.plugins = config.plugins.filter(p => p.constructor.name !== 'UglifyJsPlugin')
    }

    if (ANALYZE) {
      const opts = ANALYZE === 1 ? AnalyzeOpts : AnalyzeGetStats

      config.plugins.push(new BundleAnalyzerPlugin(opts))
    }

    return config
  }
}
