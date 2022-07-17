import { Button, Grid, Loading, Row, Spacer } from '@nextui-org/react'
import { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

import { InvoiceItem } from '../../../../types'
import ProductField from './product.field'
import QuantityField from './quantity.field'

type Props = {
  onSubmit: (item: InvoiceItem) => void
  onClose?: () => void
}

const InvoiceItemForm: FC<Props> = ({ onSubmit, onClose }) => {
  const itemForm = useForm<InvoiceItem>()

  return (
    <>
      <FormProvider {...itemForm}>
        <form onSubmit={itemForm.handleSubmit(onSubmit)}>
          <Grid.Container gap={1.5}>
            <Grid xs={12}>
              <ProductField />
            </Grid>

            <Grid xs={12}>
              <QuantityField />
            </Grid>

            <Grid xs={12}>
              <Row justify="flex-end">
                {onClose && (
                  <>
                    <Button
                      flat
                      auto
                      color="error"
                      onClick={onClose}
                      disabled={itemForm.formState.isSubmitting}
                    >
                      <FormattedMessage defaultMessage="Cancel" />
                    </Button>

                    <Spacer x={0.5} />
                  </>
                )}

                <Button
                  disabled={itemForm.formState.isSubmitting}
                  type="submit"
                  color="primary"
                >
                  {itemForm.formState.isSubmitting ? (
                    <Loading color="currentColor" size="sm" />
                  ) : (
                    <FormattedMessage defaultMessage="Add" />
                  )}
                </Button>
              </Row>
            </Grid>
          </Grid.Container>
        </form>
      </FormProvider>
    </>
  )
}

export default InvoiceItemForm
