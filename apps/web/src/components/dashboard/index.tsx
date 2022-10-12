import ReportCard from '@dew-org/components/dashboard/report-card'
import { Button, Container, Grid, Row, Spacer, Text } from '@nextui-org/react'
import NextLink from 'next/link'
import { FormattedMessage, FormattedNumber } from 'react-intl'

const Dashboard = () => {
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

      <Grid.Container gap={2}>
        <Grid xs={12} md={4}>
          <ReportCard
            title={<FormattedMessage defaultMessage="Generated invoices" />}
            info="209"
            icon="receipt"
            color="primary"
          />
        </Grid>

        <Grid xs={12} md={4}>
          <ReportCard
            title={<FormattedMessage defaultMessage="Month profits" />}
            info={
              <FormattedNumber
                value={2050023}
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
            info="200"
            icon="sell"
            color="secondary"
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Dashboard
