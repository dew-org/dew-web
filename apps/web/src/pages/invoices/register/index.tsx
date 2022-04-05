import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { InvoiceForm } from '@dew-org/invoices'
import DashboardLayout from '@dew-org/layouts/dashboard'
import withLayout from '@dew-org/utils/hocs/with-layout'
import loadI18nMessages from '@dew-org/utils/i18n/load-intl-messages'
import { Spacer, Text } from '@nextui-org/react'
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
  return (
    <>
      <Text h2>
        <FormattedMessage defaultMessage="Register Invoice" />
      </Text>

      <Spacer y={1} />

      <InvoiceForm />
    </>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterInvoicePage),
  DashboardLayout,
)
