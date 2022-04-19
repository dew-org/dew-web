import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { CatalogueTable } from '@dew-org/catalogue'
import DashboardLayout from '@dew-org/layouts/dashboard'
import withLayout from '@dew-org/utils/hocs/with-layout'
import loadI18nMessages from '@dew-org/utils/i18n/load-intl-messages'
import { Spacer, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
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

const CataloguePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Text h2>
        <FormattedMessage defaultMessage="Catalogue" />
      </Text>

      <Spacer y={1} x={0} />

      <CatalogueTable />
    </motion.div>
  )
}

export default withLayout(withPageAuthRequired(CataloguePage), DashboardLayout)
