const path = require('path')

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    config.resolve.alias['@@'] = path.resolve(__dirname, './components')
    return config
  },
  reactStrictMode: true,
  swcMinify: true,
}
