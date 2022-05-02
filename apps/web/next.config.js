// @ts-check
const withTM = require('next-transpile-modules')([
  '@dew-org/shared',
  '@dew-org/customers',
  '@dew-org/catalogue',
  '@dew-org/inventory',
  '@dew-org/invoices',
])

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTM({
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
})
