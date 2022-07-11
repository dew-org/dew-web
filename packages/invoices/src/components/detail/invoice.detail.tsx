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
  Tooltip,
} from '@nextui-org/react'
import { FC } from 'react'
import { FormattedDate, FormattedMessage, FormattedNumber } from 'react-intl'

import useInvoice from '../../hooks/use-invoice'
import { StyledPrice, StyledSubtitle } from '../form/item/card/styles'
import ItemDetail from '../form/item/detail'

type Props = {
  id: string
}

const InvoiceDetail: FC<Props> = ({ id }) => {
  const { invoice, isLoading, error } = useInvoice(id)

  return (
    <>
      {isLoading && <Loading size="xl" />}
      {error && <div>{error.message}</div>}
      {!error && invoice && (
        <>
          <Grid.Container>
            <Grid xs={12} md={8}>
              <Container gap={0}>
                <Row>
                  <Text h2>
                    <FormattedMessage
                      defaultMessage="Invoice #{id}"
                      values={{ id }}
                    />
                  </Text>
                </Row>

                <Row>
                  <Text css={{ color: '$accents6' }}>
                    <FormattedMessage
                      defaultMessage="Created at: {date}"
                      values={{
                        date: (
                          <FormattedDate
                            value={invoice.createdAt}
                            year="numeric"
                            month="long"
                            day="2-digit"
                            hour="2-digit"
                            hour12={true}
                            minute="2-digit"
                          />
                        ),
                      }}
                    />
                  </Text>
                </Row>

                <Spacer y={1} />

                <Row>
                  <Text b h3>
                    <FormattedMessage defaultMessage="Items" />
                  </Text>
                </Row>

                <Spacer y={1} />

                {invoice?.items.map(item => (
                  <>
                    <Row>
                      <ItemDetail
                        key={item.product.code}
                        item={item}
                        currency={invoice?.currency}
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
                  <StyledSubtitle>
                    {invoice.customer.id}, {invoice.customer.fullName}
                  </StyledSubtitle>
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
                    <StyledPrice>
                      <FormattedNumber
                        value={invoice.items.reduce(
                          (acc, item) => acc + item.quantity * item.price,
                          0,
                        )}
                        style="currency"
                        currency={invoice.currency}
                      />
                    </StyledPrice>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <StyledSubtitle>
                      <FormattedMessage defaultMessage="Tax" />
                    </StyledSubtitle>
                  </Col>

                  <Col>
                    <StyledPrice>
                      <FormattedNumber
                        value={invoice.items.reduce(
                          (acc, item) =>
                            acc + item.quantity * item.price * item.tax,
                          0,
                        )}
                        style="currency"
                        currency={invoice.currency}
                      />
                    </StyledPrice>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <StyledSubtitle>
                      <FormattedMessage defaultMessage="Discount" />
                    </StyledSubtitle>
                  </Col>

                  <Col>
                    <StyledPrice>
                      <FormattedNumber
                        value={invoice.items.reduce(
                          (acc, item) =>
                            acc + item.quantity * item.price * item.discount,
                          0,
                        )}
                        style="currency"
                        currency={invoice.currency}
                      />
                    </StyledPrice>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <StyledSubtitle>
                      <FormattedMessage defaultMessage="Total" />
                    </StyledSubtitle>
                  </Col>

                  <Col>
                    <StyledPrice>
                      <FormattedNumber
                        value={invoice.items.reduce(
                          (acc, item) =>
                            acc +
                            item.quantity *
                              item.price *
                              (1 + item.tax) *
                              (1 - item.discount),
                          0,
                        )}
                        style="currency"
                        currency={invoice.currency}
                      />
                    </StyledPrice>
                  </Col>
                </Row>

                <Divider y={2} />

                <Row>
                  <Tooltip
                    color="secondary"
                    content={<FormattedMessage defaultMessage="Coming soon" />}
                  >
                    <Button
                      disabled
                      auto
                      icon={
                        <span className="material-symbols-rounded">
                          file_download
                        </span>
                      }
                    >
                      <FormattedMessage defaultMessage="Download" />
                    </Button>
                  </Tooltip>
                </Row>
              </Container>
            </Grid>
          </Grid.Container>
        </>
      )}
    </>
  )
}

export default InvoiceDetail
