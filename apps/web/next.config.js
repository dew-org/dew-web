// @ts-check
const withTM = require('next-transpile-modules')([
  '@dew-org/shared',
  '@dew-org/customers',
  '@dew-org/catalogue',
  '@dew-org/inventory',
  '@dew-org/invoices',
  '@dew-org/shops',
  '@dew-org/analytics',
])

const { withSentryConfig } = require('@sentry/nextjs')

const sentryWebpackPluginOptions = {
  silent: true,
  dryRun: process.env.VERCEL_ENV !== 'production',
  authToken: process.env.SENTRY_AUTH_TOKEN,
}

/**
 * @type {import('next').NextConfig}
 */
const moduleExports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },

  sentry: {
    hideSourceMaps: true,
    autoInstrumentServerFunctions: true,
  },
}

module.exports = withSentryConfig(
  withTM(moduleExports),
  sentryWebpackPluginOptions,
)
