import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'

const App = ({ Component, pageProps }) => {
  const { locale, defaultLocale } = useRouter()

  return (
    <IntlProvider locale={locale} defaultLocale={defaultLocale}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </IntlProvider>
  )
}

export default App
