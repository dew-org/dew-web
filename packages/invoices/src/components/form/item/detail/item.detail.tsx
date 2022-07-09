import { Card, Col, Grid, Row, Text } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { InvoiceItem } from '../../../../types'
import {
  StyledDiscount,
  StyledOldPrice,
  StyledPrice,
  StyledTitle,
} from '../card/styles'

type Props = {
  item: InvoiceItem

  currency: string
}

const ItemDetail: FC<Props> = ({ item, currency }) => {
  return (
    <Card variant="flat">
      <Card.Body>
        <Grid.Container gap={1}>
          <Grid xs={12} md={6} alignItems="center">
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
          </Grid>

          <Grid xs={12} md={3} alignItems="center">
            <Col>
              <Row justify="center" align="center">
                <Text>
                  <FormattedMessage
                    defaultMessage="Quantity: {quantity}"
                    values={{ quantity: item.quantity }}
                  />
                </Text>
              </Row>
            </Col>
          </Grid>

          <Grid xs={12} md={3} alignItems="center">
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
              </Row>
            </Col>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  )
}

export default ItemDetail
