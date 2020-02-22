const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const cfg = merge.smartStrategy({
  entry: 'prepend',
  'module.rules.use': 'prepend',
})(
  baseConfig, {
    mode: 'production',
  },
)

module.exports = cfg
