import {
  Button,
  Col,
  Container,
  Divider,
  Grid,
  Loading,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import { useFormContext } from 'react-hook-form'
import { FormattedMessage, FormattedNumber } from 'react-intl'

import { Invoice } from '../../types'
import { StyledSubtitle } from './item/card/styles'
import ItemDetail from './item/detail'

const GenerateInvoiceStep = () => {
  const {
    watch,
    formState: { isSubmitting },
  } = useFormContext<Invoice>()

  const customer = watch('customer')
  const items = watch('items')

  return (
    <>
      <Grid.Container gap={1}>
        <Grid xs={12} md={8}>
          <Container>
            <Row>
              <Text b h3>
                <FormattedMessage defaultMessage="Items" />
              </Text>
            </Row>

            <Spacer y={1} />

            {items.map(item => (
              <>
                <Row>
                  <ItemDetail
                    key={item.product.code}
                    item={item}
                    currency={watch('currency')}
                  />
                </Row>
                <Spacer y={0.5} />
              </>
            ))}
          </Container>
        </Grid>

        <Grid xs={12} md={4}>
          <Container>
            <Row>
              <Text b h3>
                <FormattedMessage defaultMessage="Customer" />
              </Text>
            </Row>

            <Row>
              <StyledSubtitle>{`${customer.id}, ${customer.fullName}`}</StyledSubtitle>
            </Row>

            <Divider y={1} />

            <Row>
              <Text b h3>
                <FormattedMessage defaultMessage="Summary" />
              </Text>
            </Row>

            <Row>
              <Col>
                <StyledSubtitle>
                  <FormattedMessage defaultMessage="Subtotal" />
                </StyledSubtitle>
              </Col>

              <Col>
                <Text>
                  <FormattedNumber
                    value={items.reduce(
                      (acc, item) => acc + item.quantity * item.price,
                      0,
                    )}
                    style="currency"
                    currency={watch('currency')}
                  />
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <StyledSubtitle>
                  <FormattedMessage defaultMessage="Tax" />
                </StyledSubtitle>
              </Col>

              <Col>
                <Text>
                  <FormattedNumber
                    value={items.reduce(
                      (acc, item) =>
                        acc + item.quantity * item.price * item.tax,
                      0,
                    )}
                    style="currency"
                    currency={watch('currency')}
                  />
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <StyledSubtitle>
                  <FormattedMessage defaultMessage="Discount" />
                </StyledSubtitle>
              </Col>

              <Col>
                <Text>
                  <FormattedNumber
                    value={items.reduce(
                      (acc, item) =>
                        acc + item.quantity * item.price * item.discount,
                      0,
                    )}
                    style="currency"
                    currency={watch('currency')}
                  />
                </Text>
              </Col>
            </Row>

            <Row>
              <Col>
                <StyledSubtitle>
                  <FormattedMessage defaultMessage="Total" />
                </StyledSubtitle>
              </Col>

              <Col>
                <Text>
                  <FormattedNumber
                    value={items.reduce(
                      (acc, item) =>
                        acc +
                        item.quantity *
                          item.price *
                          (1 + item.tax) *
                          (1 - item.discount),
                      0,
                    )}
                    style="currency"
                    currency={watch('currency')}
                  />
                </Text>
              </Col>
            </Row>

            <Divider y={2} />

            <Row>
              <Button
                disabled={isSubmitting}
                type="submit"
                icon={<span className="material-symbols-rounded">sell</span>}
                css={{ '@xsMax': { width: '100%' } }}
              >
                {isSubmitting ? (
                  <Loading color="currentColor" size="sm" />
                ) : (
                  <FormattedMessage defaultMessage="Generate" />
                )}
              </Button>
            </Row>
          </Container>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default GenerateInvoiceStep
