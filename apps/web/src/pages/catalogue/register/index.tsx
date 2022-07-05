import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Product, ProductForm } from '@dew-org/catalogue'
import SimpleAnimation from '@dew-org/components/animations/simple'
import DashboardLayout from '@dew-org/layouts/dashboard'
import withLayout from '@dew-org/utils/hocs/with-layout'
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
  const { user } = useUser()

  const handleSubmit = async (values: Product) => {
    values.userId = user.sub

    await axios.post('/api/catalogue', values)
    await router.push(`/inventory/${values.code}/register`)
  }

  return (
    <SimpleAnimation>
      <Text h2>
        <FormattedMessage defaultMessage="Register Product" />
      </Text>

      <Spacer y={1} x={0} />

      <ProductForm onSubmit={handleSubmit} />
    </SimpleAnimation>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterProductPage),
  DashboardLayout,
)
