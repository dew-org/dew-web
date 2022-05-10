import { Card, Divider, Grid, Loading, Spacer, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl'

import useInvoice from '../../hooks/use-invoice'

type Props = {
  id: string
}

const InvoiceDetail: FC<Props> = ({ id }) => {
  const { invoice, isLoading, error } = useInvoice(id)

  return (
    <>
      {isLoading && <Loading />}
      {error && <div>{error.message}</div>}
      {!error && invoice && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Text h2>
            <FormattedMessage defaultMessage="Invoice #{id}" values={{ id }} />
          </Text>
          <Text small css={{ color: '$accents4' }}>
            <FormattedMessage
              defaultMessage="Created at: {date}"
              values={{
                date: (
                  <FormattedDate
                    value={invoice.createdAt}
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                ),
              }}
            />
          </Text>

          <Spacer y={1} />

          <Text h4>
            <FormattedMessage defaultMessage="Customer" />
          </Text>

          <Text>
            {invoice.customer.id} - {invoice.customer.fullName}
          </Text>

          <Spacer y={1} />

          <Text h4>
            <FormattedMessage defaultMessage="Items" />
          </Text>

          <Grid.Container gap={1}>
            {invoice.items.map(item => (
              <Grid key={item.product.code}>
                <Card key={item.product.code}>
                  <Text>
                    <Text h5 css={{ fontWeight: '$bold' }}>
                      <FormattedMessage
                        defaultMessage="Product: {code} - {name}"
                        values={{
                          code: item.product.code,
                          name: item.product.name,
                        }}
                      />
                    </Text>
                    {item.product.description && (
                      <Text small css={{ color: '$accents4' }}>
                        {item.product.description}
                      </Text>
                    )}

                    <Spacer y={0.5} />

                    <Text>
                      <FormattedMessage
                        defaultMessage="Quantity: {quantity}"
                        values={{ quantity: item.quantity }}
                      />
                    </Text>

                    <Text>
                      <FormattedMessage
                        defaultMessage="Price: {price}"
                        values={{
                          price: (
                            <FormattedNumber
                              value={item.price}
                              style="currency"
                              currency={invoice.currency}
                            />
                          ),
                        }}
                      />
                    </Text>

                    <Text>
                      <FormattedMessage
                        defaultMessage="Tax: {tax}"
                        values={{
                          tax: (
                            <FormattedNumber value={item.tax} style="percent" />
                          ),
                        }}
                      />
                    </Text>

                    <Text>
                      <FormattedMessage
                        defaultMessage="Discount: {discount}"
                        values={{
                          discount: (
                            <FormattedNumber
                              value={item.discount}
                              style="percent"
                            />
                          ),
                        }}
                      />
                    </Text>
                  </Text>
                </Card>
              </Grid>
            ))}
          </Grid.Container>

          <Divider y={1.5} />

          <Text>
            <FormattedMessage
              defaultMessage="Subtotal: {subtotal}"
              values={{
                subtotal: (
                  <FormattedNumber
                    value={invoice.subtotal || 0}
                    style="currency"
                    currency={invoice.currency}
                  />
                ),
              }}
            />
          </Text>

          <Text>
            <FormattedMessage
              defaultMessage="Tax: +{tax}"
              values={{
                tax: (
                  <FormattedNumber
                    value={invoice.tax || 0}
                    style="currency"
                    currency={invoice.currency}
                  />
                ),
              }}
            />
          </Text>

          <Text>
            <FormattedMessage
              defaultMessage="Discount: -{discount}"
              values={{
                discount: (
                  <FormattedNumber
                    value={invoice.discount || 0}
                    style="currency"
                    currency={invoice.currency}
                  />
                ),
              }}
            />
          </Text>

          <Text h3>
            <FormattedMessage
              defaultMessage="Total: {total}"
              values={{
                total: (
                  <FormattedNumber
                    value={invoice.total || 0}
                    style="currency"
                    currency={invoice.currency}
                  />
                ),
              }}
            />
          </Text>
        </motion.div>
      )}
    </>
  )
}

export default InvoiceDetail
