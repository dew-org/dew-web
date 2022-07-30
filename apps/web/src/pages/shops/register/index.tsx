import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import SimpleAnimation from '@dew-org/components/animations/simple'
import DashboardLayout from '@dew-org/layouts/dashboard'
import { CreateShop, ShopForm } from '@dew-org/shops/src'
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

const RegisterShopPage = () => {
  const router = useRouter()
  const { user } = useUser()

  const handleSubmit = async (values: CreateShop) => {
    values.userId = user.sub

    await axios.post('/api/shops', values)
    await router.push('/')
  }

  return (
    <SimpleAnimation>
      <Text h2>
        <FormattedMessage defaultMessage="Register Shop" />
      </Text>

      <Spacer y={1} />

      <ShopForm onSubmit={handleSubmit} />
    </SimpleAnimation>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterShopPage),
  DashboardLayout,
)
