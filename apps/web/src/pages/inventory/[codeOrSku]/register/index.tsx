import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useProduct } from '@dew-org/catalogue'
import SimpleAnimation from '@dew-org/components/animations/simple'
import { ProductInventory, ProductInventoryForm } from '@dew-org/inventory'
import DashboardLayout from '@dew-org/layouts/dashboard'
import withLayout from '@dew-org/utils/hocs/with-layout'
import loadI18nMessages from '@dew-org/utils/i18n/load-intl-messages'
import { Loading, Spacer, Text } from '@nextui-org/react'
import axios from 'axios'
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

const RegisterProductInventoryPage = () => {
  const router = useRouter()
  const { codeOrSku } = router.query

  const { product, isLoading, error } = useProduct(codeOrSku as string)

  const handleSubmit = async (values: ProductInventory) => {
    await axios.post('/api/inventory', values)
    await router.push('/catalogue')
  }

  return (
    <>
      {isLoading && <Loading />}
      {error && <Text>{error.message}</Text>}
      {!isLoading && !error && product && (
        <SimpleAnimation>
          <Text h2>
            <FormattedMessage defaultMessage="Register stock" />
          </Text>

          <Spacer y={1} x={0} />

          <ProductInventoryForm product={product} onSubmit={handleSubmit} />
        </SimpleAnimation>
      )}
    </>
  )
}

export default withLayout(
  withPageAuthRequired(RegisterProductInventoryPage),
  DashboardLayout,
)
