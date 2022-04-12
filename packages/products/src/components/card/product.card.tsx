import { Card, Row, Spacer, Text, Tooltip } from '@nextui-org/react'
import { FC } from 'react'
import { Bookmark, Chart, Discount } from 'react-iconly'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { Product } from '../../types'

type Props = {
  product: Product
  onClick: (product: Product) => void
}

const ProductCard: FC<Props> = ({ product, onClick }) => {
  return (
    <Card
      clickable
      key={product.code}
      css={{ minWidth: '250px', borderColor: '$primary' }}
      onClick={() => onClick(product)}
    >
      <Card.Body>
        <Row wrap="wrap" justify="space-between">
          <Text b>{product.code}</Text>

          <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
            {product.name}
          </Text>
        </Row>

        <Spacer y={0.5} />

        <Row wrap="wrap" justify="space-between">
          <Tooltip content={<FormattedMessage defaultMessage="Stock" />}>
            <Chart />
            <Spacer x={0.2} />
            {product.stock}
          </Tooltip>

          <div style={{ display: 'flex' }}>
            <Text
              del={product.discount > 0}
              css={{ color: '$accents4', fontWeight: '$semibold' }}
            >
              $<FormattedNumber value={product.salePrice} />
            </Text>
            {product.discount > 0 && (
              <>
                <Spacer x={0.5} />

                <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
                  $
                  <FormattedNumber
                    value={product.salePrice * (1 - product.discount)}
                  />
                </Text>
              </>
            )}
          </div>
        </Row>

        <Spacer y={0.5} />

        <Row wrap="wrap" justify="space-between">
          <Tooltip
            css={{ zIndex: '$max' }}
            content={<FormattedMessage defaultMessage="Discount" />}
          >
            <Discount />
            <Spacer x={0.2} />
            {product.discount * 100}%
          </Tooltip>

          <Tooltip
            css={{ zIndex: '$max' }}
            content={<FormattedMessage defaultMessage="Tax" />}
          >
            <Bookmark />
            <Spacer x={0.2} />
            {product.tax * 100}%
          </Tooltip>
        </Row>
      </Card.Body>

      <Card.Footer>
        <Text css={{ color: '$accents4' }}>{product.description}</Text>
      </Card.Footer>
    </Card>
  )
}

export default ProductCard
