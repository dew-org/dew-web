import { Product } from '@dew-org/catalogue'
import { useProductInventory } from '@dew-org/inventory'
import { Button, Grid, Loading, Row, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { InvoiceItem } from '../../../../types'
import QuantityField from './quantity.field'

type Props = {
  product: Product

  onSubmit: (item: InvoiceItem) => void
}

const InvoiceItemForm: FC<Props> = ({ onSubmit, product }) => {
  const {
    product: productInventory,
    isLoading,
    error,
  } = useProductInventory(product.code)

  const itemForm = useForm<InvoiceItem>({
    defaultValues: {
      product: {
        code: product.code,
        name: product.name,
      },
      price: product.price.salePrice,
      quantity: 1,
      discount: product.discount * 100,
      tax: product.tax * 100,
    },
  })

  return (
    <>
      {isLoading && <Loading />}
      {error && <Text>{error.message}</Text>}
      {productInventory && (
        <FormProvider {...itemForm}>
          <form onSubmit={itemForm.handleSubmit(onSubmit)}>
            <Grid.Container gap={1.5}>
              <Grid xs={12}>
                <QuantityField max={productInventory?.stock || 0} />
              </Grid>

              <Grid xs={12}>
                <Row justify="flex-end">
                  <Text small css={{ color: '$accents5' }}>
                    Available: {productInventory.stock}
                  </Text>
                </Row>
              </Grid>

              <Grid xs={12}>
                <Button
                  disabled={itemForm.formState.isSubmitting}
                  type="submit"
                  color="primary"
                  css={{ width: '100%' }}
                >
                  {itemForm.formState.isSubmitting ? (
                    <Loading color="currentColor" size="sm" />
                  ) : (
                    <FormattedMessage defaultMessage="Add" />
                  )}
                </Button>
              </Grid>
            </Grid.Container>
          </form>
        </FormProvider>
      )}
    </>
  )
}

export default InvoiceItemForm
