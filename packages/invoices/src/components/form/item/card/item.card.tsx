import { Card, Grid, Row } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedNumber } from 'react-intl'

import { InvoiceItem } from '../../../../types'
import { StyledCard, StyledPrice, StyledTitle } from './styles'

type Props = {
  item: InvoiceItem
  currency: string
}

const ItemCard: FC<Props> = ({ item, currency }) => {
  return (
    <StyledCard key={item.product.code}>
      <Card.Body css={{ px: '$8', position: 'relative', ov: 'visible' }}>
        <Grid.Container>
          <Grid sm={12}>
            <Row as="nav" justify="space-between">
              <StyledTitle>
                {item.quantity} x {item.product.name}
              </StyledTitle>

              <StyledPrice>
                <FormattedNumber
                  value={
                    item.price *
                    (1 + item.tax / 100) *
                    (1 - item.discount / 100) *
                    item.quantity
                  }
                  style="currency"
                  currency={currency}
                />
              </StyledPrice>
            </Row>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </StyledCard>
  )
}

export default ItemCard
