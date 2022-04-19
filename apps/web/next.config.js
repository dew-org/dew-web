// @ts-check
const withTM = require('next-transpile-modules')([
  '@dew-org/shared',
  '@dew-org/customers',
  '@dew-org/catalogue',
  '@dew-org/inventory',
  '@dew-org/products',
  '@dew-org/invoices',
])

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTM({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  webpack(config, { dev, ...other }) {
    if (!dev) {
      // https://formatjs.io/docs/guides/advanced-usage#react-intl-without-parser-40-smaller
      config.resolve.alias['@formatjs/icu-messageformat-parser'] =
        '@formatjs/icu-messageformat-parser/no-parser'
    }
    return config
  },
})
