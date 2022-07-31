import { UserProvider } from '@auth0/nextjs-auth0'
import DefaultLayout from '@dew-org/layouts/default'
import { ShopProvider } from '@dew-org/shops'
import { darkTheme, lightTheme } from '@dew-org/theme'
import { NextUIProvider } from '@nextui-org/react'
import { AnimatePresence, domAnimation, LazyMotion } from 'framer-motion'
import { NextComponentType, NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { IntlProvider } from 'react-intl'

type NextPageWithLayout = NextPage & {
  defaultProps?: {
    Layout?: NextComponentType
  }
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
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
          <UserProvider>
            <ShopProvider>
              <Layout>
                <LazyMotion features={domAnimation}>
                  <AnimatePresence
                    exitBeforeEnter
                    onExitComplete={() => window.scrollTo(0, 0)}
                  >
                    <Component {...pageProps} key={router.route} />
                  </AnimatePresence>
                </LazyMotion>
              </Layout>
            </ShopProvider>
          </UserProvider>
        </IntlProvider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default App
