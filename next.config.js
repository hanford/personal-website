const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
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
   config.plugins.push(
     new SWPrecacheWebpackPlugin({
       verbose: true,
       minify: true,
       staticFileGlobsIgnorePatterns: [/\.next\//],
       runtimeCaching: [
         {
           handler: 'networkFirst',
           urlPattern: /^https?.*/
         }
       ]
     })
   )

    if (ANALYZE) {
      const opts = ANALYZE === 1 ? AnalyzeOpts : AnalyzeGetStats

      config.plugins.push(new BundleAnalyzerPlugin(opts))
    }

    return config
  }
}
