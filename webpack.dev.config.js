const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')

const cfg = merge.smartStrategy({
  entry: 'prepend',
  plugins: 'prepend',
  'module.rules.use': 'prepend',
})(
  baseConfig, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, './dist'),
      compress: true,
      port: 8080
    }
  }
)

module.exports = cfg
