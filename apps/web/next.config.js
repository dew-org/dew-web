const withTM = require('next-transpile-modules')([
  '@dew-org/shared',
  '@dew-org/products',
])

module.exports = withTM({
  reactStrictMode: true,
})
