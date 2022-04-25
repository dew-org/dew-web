import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import SimpleAnimation from '@dew-org/components/animations/simple'
import { InvoiceDetail } from '@dew-org/invoices'
import DashboardLayout from '@dew-org/layouts/dashboard'
import withLayout from '@dew-org/utils/hocs/with-layout'
import loadI18nMessages from '@dew-org/utils/i18n/load-intl-messages'
import { Spacer, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

export const getServerSideProps = async context => {
  return {
    props: {
      intlMessages: await loadI18nMessages({
        locale: context.locale,
        defaultLocale: context.defaultLocale,
      }),
    },
  }
}

const InvoiceDetailPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <SimpleAnimation>
      <Text h3>
        <FormattedMessage defaultMessage="Invoice detail" />
      </Text>

      <Spacer y={1} x={0} />

      <InvoiceDetail id={id as string} />
    </SimpleAnimation>
  )
}

export default withLayout(
  withPageAuthRequired(InvoiceDetailPage),
  DashboardLayout,
)
