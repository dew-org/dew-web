import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { InvoiceDetail } from '@dew-org/invoices'
import DashboardLayout from '@dew-org/layouts/dashboard'
import withLayout from '@dew-org/utils/hocs/with-layout'
import loadI18nMessages from '@dew-org/utils/i18n/load-intl-messages'
import { Spacer, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Text h3>
        <FormattedMessage defaultMessage="Invoice detail" />
      </Text>

      <Spacer y={1} x={0} />

      <InvoiceDetail id={id as string} />
    </motion.div>
  )
}

export default withLayout(
  withPageAuthRequired(InvoiceDetailPage),
  DashboardLayout,
)
