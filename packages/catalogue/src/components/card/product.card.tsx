import { Button, Card, Col, Grid, Row } from '@nextui-org/react'
import { FC } from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { Product } from '../../types'
import {
  StyledCard,
  StyledDiscount,
  StyledOldPrice,
  StyledPrice,
  StyledSubtitle,
  StyledTitle,
} from './styles'

type Props = {
  product: Product

  onClick?: (product: Product) => void
}

const ProductCard: FC<Props> = ({ product, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(product)
    }
  }

  return (
    <StyledCard key={product.code}>
      <Card.Body css={{ px: '$8', position: 'relative', ov: 'visible' }}>
        <Grid.Container>
          <Grid
            sm={12}
            css={{
              px: '$10',
              position: 'relative',
              zIndex: '$10',
              '@xsMax': {
                py: '$8',
              },
            }}
          >
            <Col as="nav">
              <StyledTitle>{product.name}</StyledTitle>

              <StyledSubtitle>{product.description}</StyledSubtitle>

              <Row css={{ py: '$4' }}>
                <StyledPrice>
                  <FormattedNumber
                    value={
                      product.price.salePrice *
                      (1 + product.tax) *
                      (1 - product.discount)
                    }
                    style="currency"
                    currency={product.price.currency}
                  />
                </StyledPrice>

                {product.discount > 0 && (
                  <>
                    <StyledOldPrice>
                      <FormattedNumber
                        value={product.price.salePrice * (1 + product.tax)}
                        style="currency"
                        currency={product.price.currency}
                      />
                    </StyledOldPrice>

                    <StyledDiscount>
                      <FormattedMessage
                        defaultMessage="{discount}% off"
                        values={{ discount: product.discount * 100 }}
                      />
                    </StyledDiscount>
                  </>
                )}
              </Row>
            </Col>
          </Grid>
        </Grid.Container>
      </Card.Body>

      {onClick && (
        <Card.Footer>
          <Button onClick={handleClick}>
            <FormattedMessage defaultMessage="Select" />
          </Button>
        </Card.Footer>
      )}
    </StyledCard>
  )
}

export default ProductCard
