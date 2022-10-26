import { ReportCard, useNowAnalytics } from '@dew-org/analytics'
import {
  Button,
  Container,
  Grid,
  Loading,
  Row,
  Spacer,
  Text,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { FormattedMessage, FormattedNumber } from 'react-intl'

const Dashboard = () => {
  const { analytics, isLoading, error } = useNowAnalytics()

  return (
    <Container fluid>
      <Spacer y={1} />

      <Row>
        <Text h1 css={{ fontWeight: 100 }}>
          <FormattedMessage defaultMessage="Dashboard" />
        </Text>
      </Row>

      <Spacer y={1} />

      <Row justify="flex-end">
        <NextLink href="/invoices/register">
          <Button>
            <FormattedMessage defaultMessage="New invoice" />
          </Button>
        </NextLink>
      </Row>

      <Spacer y={1} />

      {isLoading && <Loading size="xl" />}

      {error && (
        <Text h3>
          <FormattedMessage defaultMessage="Error loading analytics" />
        </Text>
      )}

      {analytics && (
        <Grid.Container gap={2}>
          <Grid xs={12} md={4}>
            <ReportCard
              title={<FormattedMessage defaultMessage="Generated invoices" />}
              info={<FormattedNumber value={analytics.invoices} style="unit" />}
              icon="receipt"
              color="primary"
            />
          </Grid>

          <Grid xs={12} md={4}>
            <ReportCard
              title={<FormattedMessage defaultMessage="Month profits" />}
              info={
                <FormattedNumber
                  value={analytics.sales}
                  style="currency"
                  currency="COP"
                />
              }
              icon="payments"
              color="success"
            />
          </Grid>

          <Grid xs={12} md={4}>
            <ReportCard
              title={<FormattedMessage defaultMessage="Sold products" />}
              info={<FormattedNumber value={analytics.products} style="unit" />}
              icon="sell"
              color="secondary"
            />
          </Grid>
        </Grid.Container>
      )}
    </Container>
  )
}

export default Dashboard
