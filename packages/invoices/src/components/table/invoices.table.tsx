import { Col, Link, Row, Table, Tooltip } from '@nextui-org/react'
import NextLink from 'next/link'
import { Key } from 'react'
import { Show } from 'react-iconly'
import { FormattedDate, FormattedMessage, useIntl } from 'react-intl'

import useInvoices from '../../hooks/use-invoices'
import { Customer, Invoice } from '../../types'

const InvoicesTable = () => {
  const { invoices, isLoading, error } = useInvoices()
  const intl = useIntl()

  const columns = [
    {
      key: 'customer',
      label: intl.formatMessage({ defaultMessage: 'Customer' }),
    },
    {
      key: 'createdAt',
      label: intl.formatMessage({ defaultMessage: 'Created at' }),
    },
    {
      key: 'subtotal',
      label: intl.formatMessage({ defaultMessage: 'Subtotal' }),
    },
    {
      key: 'tax',
      label: intl.formatMessage({ defaultMessage: 'Tax' }),
    },
    {
      key: 'discount',
      label: intl.formatMessage({ defaultMessage: 'Discount' }),
    },
    {
      key: 'total',
      label: intl.formatMessage({ defaultMessage: 'Total' }),
    },
    {
      key: 'actions',
      label: intl.formatMessage({ defaultMessage: 'Actions' }),
    },
  ]

  const renderCell = (invoice: Invoice, columnKey: Key) => {
    const cellValue = invoice[columnKey as keyof Invoice]

    switch (columnKey) {
      case 'customer': {
        const customer = cellValue as Customer
        return `${customer.fullName}`
      }
      case 'createdAt':
        return <FormattedDate value={cellValue as number} />
      case 'actions':
        return (
          <Row justify="center" align="center">
            <Col css={{ d: 'flex' }}>
              <Tooltip content={<FormattedMessage defaultMessage="Details" />}>
                <NextLink
                  passHref
                  href="/invoices/[id]"
                  as={`/invoices/${invoice.id}`}
                >
                  <Link>
                    <Show />
                  </Link>
                </NextLink>
              </Tooltip>
            </Col>
          </Row>
        )
      default:
        return cellValue
    }
  }

  return (
    <>
      {error && <div>{error.message}</div>}
      {!error && (
        <Table aria-label="invoices" containerCss={{ overflowX: 'auto' }}>
          <Table.Header columns={columns}>
            {column => (
              <Table.Column
                key={column.key}
                hideHeader={column.key === 'actions'}
                align={column.key === 'actions' ? 'center' : 'start'}
              >
                {column.label}
              </Table.Column>
            )}
          </Table.Header>

          <Table.Body
            items={invoices}
            loadingState={isLoading ? 'loading' : 'idle'}
          >
            {item => (
              <Table.Row key={item.id}>
                {columnKey => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      )}
    </>
  )
}

export default InvoicesTable
