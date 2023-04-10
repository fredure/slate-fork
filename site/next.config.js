const fs = require('fs')
const path = require('path')

module.exports = {
  webpack: config => {
    config.module.rules.push({
      experimental: {
        workerThreads: true
      },
      test: /\.js$/,
      enforce: 'pre',
      exclude: [/node_modules[\\\/]@next/, /node_modules[\\\/]next/],
      use: [
        {
          loader: require.resolve('source-map-loader'),
        },
      ],
    })
    return config
  },
}
