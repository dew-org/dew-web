import { UserProvider } from '@auth0/nextjs-auth0'
import DefaultLayout from '@dew-org/layouts/default'
import { fetcher } from '@dew-org/shared'
import { ShopProvider } from '@dew-org/shops'
import { darkTheme, lightTheme } from '@dew-org/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import { NextComponentType, NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { IntlProvider } from 'react-intl'
import { SWRConfig, SWRConfiguration } from 'swr'

type NextPageWithLayout = NextPage & {
  defaultProps?: {
    Layout?: NextComponentType
  }
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const SWRConfigOptions: SWRConfiguration = {
  fetcher: (url: string) => fetcher(url),
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
  errorRetryCount: Number(process.env.NEXT_PUBLIC_SWR_ERROR_RETRY_COUNT) || 3,
  errorRetryInterval:
    Number(process.env.NEXT_PUBLIC_SWR_ERROR_RETRY_INTERVAL) || 1000,
}

const App = ({ Component, pageProps, router }: AppPropsWithLayout) => {
  const { locale, defaultLocale } = useRouter()

  const Layout = Component.defaultProps?.Layout || DefaultLayout

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <IntlProvider
          locale={locale}
          defaultLocale={defaultLocale}
          messages={pageProps.intlMessages}
        >
          <SWRConfig value={SWRConfigOptions}>
            <UserProvider>
              <ShopProvider>
                <Layout>
                  <LazyMotion features={domAnimation}>
                    <AnimatePresence
                      mode="wait"
                      onExitComplete={() => window.scrollTo(0, 0)}
                    >
                      <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                  </LazyMotion>
                </Layout>
              </ShopProvider>
            </UserProvider>
          </SWRConfig>
        </IntlProvider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default App
