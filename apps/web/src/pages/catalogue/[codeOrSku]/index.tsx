import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { ProductDetail } from '@dew-org/catalogue'
import SimpleAnimation from '@dew-org/components/animations/simple'
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

const ProductDetailPage = () => {
  const router = useRouter()
  const { codeOrSku } = router.query

  return (
    <SimpleAnimation>
      <Spacer y={1} x={0} />

      <Text h3>
        <FormattedMessage defaultMessage="Product detail" />
      </Text>

      <Spacer y={1} x={0} />

      <ProductDetail codeOrSku={codeOrSku as string} />
    </SimpleAnimation>
  )
}

export default withLayout(
  withPageAuthRequired(ProductDetailPage),
  DashboardLayout,
)
