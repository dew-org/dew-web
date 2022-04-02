import { UserProvider } from '@auth0/nextjs-auth0'
import { darkTheme, lightTheme } from '@dew-org/theme'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { IntlProvider } from 'react-intl'

const App = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter()

  return (
    <IntlProvider
      locale={locale}
      defaultLocale={defaultLocale}
      messages={pageProps.intlMessages}
    >
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </NextUIProvider>
      </NextThemesProvider>
    </IntlProvider>
  )
}

export default App
