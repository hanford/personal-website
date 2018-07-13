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
  // async exportPathMap () {
  //   return {
  //     '/': { page: '/' },
  //     '/chirp': { page: '/chirp' },
  //     '/fast-flix': { page: '/fast-flix' },
  //     '/instachrome': { page: '/instachrome' },
  //     '/projects': { page: '/projects' },
  //     '/snapchat': { page: '/snapchat' },
  //     '/uber-chrome': { page: '/uber-chrome' },
  //     '/youtube-darkmode': { page: '/youtube-darkmode' },
  //   }
  // },
  webpack (config, { dev }) {
    if (ANALYZE) {
      const opts = ANALYZE === 1 ? AnalyzeOpts : AnalyzeGetStats

      config.plugins.push(new BundleAnalyzerPlugin(opts))
    }

    return config
  }
})
