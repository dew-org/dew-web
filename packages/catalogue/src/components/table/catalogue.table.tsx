import { Table } from '@nextui-org/react'
import { useIntl } from 'react-intl'

import useCatalogue from '../../hooks/use-catalogue'
import { Product } from '../../types'

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
      key: 'regularPrice',
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
  ]

  return (
    <>
      {error && <div>{error.message}</div>}
      {products && (
        <Table aria-label="catalogue" containerCss={{ overflowX: 'auto' }}>
          <Table.Header columns={columns}>
            {column => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body
            items={products}
            loadingState={isLoading ? 'loading' : 'idle'}
          >
            {item => (
              <Table.Row key={item.code}>
                {columnKey => (
                  <Table.Cell>
                    {['discount', 'tax'].includes(columnKey as string)
                      ? `${(item[columnKey as keyof Product] as number) * 100}%`
                      : item[columnKey as keyof Product]}
                  </Table.Cell>
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
