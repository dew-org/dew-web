import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import SimpleAnimation from '@dew-org/components/animations/simple'
import { Customer, CustomerForm } from '@dew-org/customers'
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

const RegisterCustomerPage = () => {
  const router = useRouter()

  const handleSubmit = async (values: Customer) => {
    await axios.post('/api/customers', values)
    await router.push('/customers')
  }

  return (
    <SimpleAnimation>
      <Text h2>
        <FormattedMessage defaultMessage="Register Customer" />
      </Text>

      <Spacer y={1} />

      <CustomerForm onSubmit={handleSubmit} />
    </SimpleAnimation>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterCustomerPage),
  DashboardLayout,
)
