import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import SimpleAnimation from '@dew-org/components/animations/simple'
import { Invoice, InvoiceForm, InvoiceFormProvider } from '@dew-org/invoices'
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

const RegisterInvoicePage = () => {
  const router = useRouter()
  const { user } = useUser()

  const handleSubmit = async (values: Invoice) => {
    values.userId = user.sub

    await axios.post('/api/invoices', values)
    await router.push('/invoices')
  }

  return (
    <SimpleAnimation>
      <Text h2>
        <FormattedMessage defaultMessage="Register Invoice" />
      </Text>

      <Spacer y={1} />

      <InvoiceFormProvider>
        <InvoiceForm onSubmit={handleSubmit} />
      </InvoiceFormProvider>
    </SimpleAnimation>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterInvoicePage),
  DashboardLayout,
)
