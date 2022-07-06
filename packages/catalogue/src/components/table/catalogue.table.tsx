import { Col, Link, Row, Table, Tooltip } from '@nextui-org/react'
import NextLink from 'next/link'
import { Key } from 'react'
import { Show } from 'react-iconly'
import { FormattedMessage, FormattedNumber, useIntl } from 'react-intl'

import useCatalogue from '../../hooks/use-catalogue'
import { Product, ProductPrice } from '../../types'

const CatalogueTable = () => {
  const { products, isLoading, error } = useCatalogue()
  const intl = useIntl()

  const columns = [
    {
      key: 'code',
      label: intl.formatMessage({ defaultMessage: 'Code' }),
    },
    {
      key: 'name',
      label: intl.formatMessage({ defaultMessage: 'Name' }),
    },
    {
      key: 'retailPrice',
      label: intl.formatMessage({ defaultMessage: 'Regular price' }),
    },
    {
      key: 'salePrice',
      label: intl.formatMessage({ defaultMessage: 'Sale price' }),
    },
    {
      key: 'discount',
      label: intl.formatMessage({ defaultMessage: 'Discount' }),
    },
    {
      key: 'tax',
      label: intl.formatMessage({ defaultMessage: 'Tax' }),
    },
    {
      key: 'actions',
      label: intl.formatMessage({ defaultMessage: 'Actions' }),
    },
  ]

  const renderCell = (product: Product, columnKey: Key) => {
    const cellValue = product[columnKey as keyof Product]
    switch (columnKey) {
      case 'discount':
      case 'tax':
        return `${(cellValue as number) * 100}%`
      case 'retailPrice':
      case 'salePrice': {
        const price = cellValue as ProductPrice

        return (
          <FormattedNumber
            value={
              columnKey === 'retailPrice' ? price.retailPrice : price.salePrice
            }
            style="currency"
            currency={price.currency}
          />
        )
      }
      case 'actions':
        return (
          <Row justify="center" align="center">
            <Col css={{ d: 'flex' }}>
              <Tooltip content={<FormattedMessage defaultMessage="Details" />}>
                <NextLink href={`/catalogue/${product.code}`} passHref>
                  <Link>
                    <Show />
                  </Link>
                </NextLink>
              </Tooltip>
            </Col>
          </Row>
        )
      default:
        return <>{cellValue}</>
    }
  }

  return (
    <>
      {error && <div>{error.message}</div>}
      {products && (
        <Table aria-label="catalogue" containerCss={{ overflowX: 'auto' }}>
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
            items={products}
            loadingState={isLoading ? 'loading' : 'idle'}
          >
            {item => (
              <Table.Row key={item.code}>
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

export default CatalogueTable
