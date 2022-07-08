import { useProductInventory } from '@dew-org/inventory'
import {
  Card,
  Col,
  Container,
  Loading,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { InvoiceItem } from '../../../../types'
import {
  IconButton,
  StyledDiscount,
  StyledOldPrice,
  StyledPrice,
  StyledTitle,
} from './styles'

type Props = {
  item: InvoiceItem
  currency: string

  onRemove: (productCode: string) => void
  onDecrease: (productCode: string) => void
  onIncrease: (productCode: string) => void
}

const ItemCard: FC<Props> = ({
  item,
  currency,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  const {
    product: productInventory,
    isLoading,
    error,
  } = useProductInventory(item.product.code)

  return (
    <Card key={item.product.code}>
      <Card.Body>
        <Container responsive wrap="wrap">
          <Row align="center">
            <Col>
              <Row justify="flex-start" align="center">
                <StyledTitle>{item.product.name}</StyledTitle>
              </Row>
              <Row>
                <StyledPrice>
                  <FormattedNumber
                    value={item.price * (1 + item.tax) * (1 - item.discount)}
                    style="currency"
                    currency={currency}
                  />
                </StyledPrice>

                {item.discount > 0 && (
                  <>
                    <StyledOldPrice>
                      <FormattedNumber
                        value={item.price * (1 + item.tax)}
                        style="currency"
                        currency={currency}
                      />
                    </StyledOldPrice>

                    <StyledDiscount>
                      <FormattedMessage
                        defaultMessage="{discount}% off"
                        values={{ discount: item.discount * 100 }}
                      />
                    </StyledDiscount>
                  </>
                )}
              </Row>
            </Col>

            <Col>
              <Row justify="center" align="center">
                <IconButton
                  auto
                  flat
                  icon={
                    <span className="material-symbols-rounded">remove</span>
                  }
                  onClick={() => onDecrease(item.product.code)}
                  disabled={item.quantity === 1 || isLoading}
                />

                <Spacer x={0.5} />

                <Text>{item.quantity}</Text>

                <Spacer x={0.5} />

                <IconButton
                  auto
                  flat
                  icon={<span className="material-symbols-rounded">add</span>}
                  onClick={() => onIncrease(item.product.code)}
                  disabled={
                    item.quantity === productInventory?.stock ||
                    !productInventory ||
                    isLoading
                  }
                />
              </Row>

              <Spacer y={0.3} />

              <Row justify="center" align="center">
                {isLoading && <Loading size="xs" />}
                {error && <Text>{error.message}</Text>}
                {!isLoading && productInventory && (
                  <Text small css={{ color: '$accents6' }}>
                    <FormattedMessage defaultMessage="Available" />:{' '}
                    {(productInventory?.stock || 0) - item.quantity}
                  </Text>
                )}
              </Row>
            </Col>

            <Col>
              <Row justify="flex-end" align="center">
                <StyledPrice>
                  <FormattedNumber
                    value={
                      item.price *
                      (1 + item.tax) *
                      (1 - item.discount) *
                      item.quantity
                    }
                    style="currency"
                    currency={currency}
                  />
                </StyledPrice>

                <Spacer x={0.5} />

                <IconButton
                  auto
                  light
                  color="error"
                  icon={
                    <span className="material-symbols-rounded">delete</span>
                  }
                  onClick={() => onRemove(item.product.code)}
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default ItemCard
