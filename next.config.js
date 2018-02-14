const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withOffline = require('next-offline')
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

module.exports = withOffline({
  UNSAFE_workbox: true,
  webpack (config, { dev }) {
    if (ANALYZE) {
      const opts = ANALYZE === 1 ? AnalyzeOpts : AnalyzeGetStats

      config.plugins.push(new BundleAnalyzerPlugin(opts))
    }

    return config
  }
})
