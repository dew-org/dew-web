import { useProductInventory } from '@dew-org/inventory'
import { Divider, Loading, Spacer, Text } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { FC } from 'react'
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl'

import useProduct from '../../hooks/use-product'

type Props = {
  codeOrSku: string
}

const ProductDetail: FC<Props> = ({ codeOrSku }) => {
  const { product, isLoading, error } = useProduct(codeOrSku)
  const {
    product: productStock,
    isLoading: isLoadingStock,
    error: stockError,
  } = useProductInventory(codeOrSku)

  return (
    <>
      {isLoading && <Loading />}
      {error && <div>{error.message}</div>}
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Text h2>
            {product.code} - {product.sku}, {product.name}
          </Text>
          <Text
            h5
            css={{
              color: '$accents6',
              fontWeight: '$normal',
            }}
          >
            {product.description}
          </Text>
          <Spacer y={0.5} />

          <Text small css={{ color: '$accents4' }}>
            <FormattedMessage defaultMessage="Created at" />:{' '}
            <FormattedDate value={product.createdAt} />
          </Text>

          {product.updatedAt && (
            <>
              <Divider />
              <Text small css={{ color: '$accents4' }}>
                <FormattedMessage defaultMessage="Updated at" />:{' '}
                <FormattedDate value={product.updatedAt} />
              </Text>
            </>
          )}

          <Spacer y={1} />

          <Text h4>
            <FormattedMessage defaultMessage="Pricing" />
          </Text>

          <Text
            css={{
              color: '$accents6',
            }}
          >
            <FormattedMessage
              defaultMessage="Retail price: {regularPrice} $"
              values={{
                regularPrice: (
                  <FormattedNumber
                    value={product.price.retailPrice}
                    style="currency"
                    currency={product.price.currency}
                  />
                ),
              }}
            />
          </Text>

          <Text
            css={{
              color: '$accents6',
            }}
          >
            <FormattedMessage
              defaultMessage="Sale price: {salePrice} $"
              values={{
                salePrice: (
                  <FormattedNumber
                    value={product.price.salePrice}
                    style="currency"
                    currency={product.price.currency}
                  />
                ),
              }}
            />
          </Text>

          <Spacer y={0.5} />

          <Text h4>
            <FormattedMessage defaultMessage="Tax and discount" />
          </Text>

          <Text
            css={{
              color: '$accents6',
            }}
          >
            <FormattedMessage
              defaultMessage="Discount: {discount}%"
              values={{ discount: product.discount * 100 }}
            />
          </Text>

          <Text
            css={{
              color: '$accents6',
            }}
          >
            <FormattedMessage
              defaultMessage="Tax: {tax}%"
              values={{ tax: product.tax * 100 }}
            />
          </Text>

          <Spacer y={0.5} />

          <Text blockquote>
            <FormattedMessage
              defaultMessage="Final price: {price} $"
              values={{
                price: (
                  <FormattedNumber
                    value={
                      product.price.salePrice *
                      (1 + product.tax) *
                      (1 - product.discount)
                    }
                    style="currency"
                    currency={product.price.currency}
                  />
                ),
              }}
            />
          </Text>

          <Spacer y={1} />

          <Text h4>
            <FormattedMessage defaultMessage="Inventory" />
          </Text>

          <Spacer y={0.5} />

          {isLoadingStock && <Loading />}
          {stockError && <div>{stockError.message}</div>}
          {productStock && (
            <Text
              css={{
                color: '$accents6',
              }}
            >
              <FormattedMessage
                defaultMessage="Available: {available}"
                values={{ available: productStock.stock }}
              />
            </Text>
          )}

          <Spacer y={0.5} />
        </motion.div>
      )}
    </>
  )
}

export default ProductDetail
