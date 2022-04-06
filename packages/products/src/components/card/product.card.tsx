import { Card, Row, Spacer, Text, Tooltip } from '@nextui-org/react'
import { FC } from 'react'
import { Chart } from 'react-iconly'
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

          <Text css={{ color: '$accents4', fontWeight: '$semibold' }}>
            $<FormattedNumber value={product.sellPrice} />
          </Text>
        </Row>
      </Card.Body>

      <Card.Footer>
        <Text css={{ color: '$accents4' }}>{product.description}</Text>
      </Card.Footer>
    </Card>
  )
}

export default ProductCard
