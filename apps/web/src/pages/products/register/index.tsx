import { Product, ProductForm } from '@dew-org/products'
import loadI18nMessages from '@dew-org/utils/i18n/load-intl-messages'
import { Spacer, Text } from '@nextui-org/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

export const getStaticProps = async context => {
  return {
    props: {
      intlMessages: await loadI18nMessages({
        locale: context.locale,
        defaultLocale: context.defaultLocale,
      }),
    },
  }
}

const RegisterProductPage = () => {
  const router = useRouter()

  const handleSubmit = async (values: Product) => {
    await axios.post('/api/products', values)
    await router.push('/products')
  }

  return (
    <>
      <Text h2>
        <FormattedMessage defaultMessage="Register Product" />
      </Text>

      <Spacer y={1} />

      <ProductForm onSubmit={handleSubmit} />
    </>
  )
}

export default RegisterProductPage
