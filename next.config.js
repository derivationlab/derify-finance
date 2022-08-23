const path = require('path')
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    config.resolve.alias['@@'] = path.resolve(__dirname, './components')
    return config
  },
  reactStrictMode: true,
  swcMinify: true
})
