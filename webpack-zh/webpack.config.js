const webpack = require('webpack')
let count = 0
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  /* entry: {
    main: './src/index.js',
    module1: './src/module-1',
    module2: './src/module-2',
    common: './src/common',
  }, */
  entry: {
    main: './src/index.js'
  },

  mode: 'production',

  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: 'chunk-[name].[chunkhash:8].js'
  },

  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        /* common: {
          test: /common/,
          name: 'common',
          chunks: 'all'
        },
        module1: {
          test: /module-?1/,
          name: 'module1',
          chunks: 'all'
        },
        module2: {
          test: /module-?2/,
          name: 'module2',
          chunks: 'all'
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }, */
      },
    },
  },

  plugins: [
  ]
}
