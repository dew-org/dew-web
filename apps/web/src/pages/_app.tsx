import { darkTheme, lightTheme } from '@dew-org/theme'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { IntlProvider } from 'react-intl'

const App = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter()

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale}>
      <NextThemesProvider
        defaultTheme='system'
        attribute='class'
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </IntlProvider>
  )
}

export default App
