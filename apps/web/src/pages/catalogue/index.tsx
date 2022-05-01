import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { CatalogueTable } from '@dew-org/catalogue'
import SimpleAnimation from '@dew-org/components/animations/simple'
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

const CataloguePage = () => {
  return (
    <SimpleAnimation>
      <Text h2>
        <FormattedMessage defaultMessage="Catalogue" />
      </Text>

      <Spacer y={1} x={0} />

      <CatalogueTable />
    </SimpleAnimation>
  )
}

export default withLayout(withPageAuthRequired(CataloguePage), DashboardLayout)
