import { Product, useCatalogue } from '@dew-org/catalogue'
import { Container, Dropdown, Row, Spacer, Text } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormattedMessage, useIntl } from 'react-intl'

import { InvoiceItem } from '../../../../types'

const ProductField = () => {
  const {
    setValue,
    register,
    formState: {
      errors: { product },
    },
  } = useFormContext<InvoiceItem>()

  const intl = useIntl()

  useEffect(() => {
    register('product', {
      required: {
        value: true,
        message: intl.formatMessage({
          defaultMessage: 'Please select a product',
        }),
      },
    })
  }, [intl, register])

  const { products } = useCatalogue()

  const [selectedCode, setSelectedCode] = useState<Set<string>>(new Set(['']))
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  )

  useEffect(() => {
    const productCode = Array.from(selectedCode)[0]

    const selectedProduct = products?.find(p => p.code === productCode)
    setSelectedProduct(selectedProduct)

    if (selectedProduct !== undefined) {
      setValue(
        'product',
        {
          code: selectedProduct.code,
          name: selectedProduct.name,
        },
        { shouldValidate: true },
      )

      setValue('tax', +selectedProduct.tax)
      setValue('discount', +selectedProduct.discount)
      setValue('price', +selectedProduct.price.salePrice)
    }
  }, [products, selectedCode, setValue])

  return (
    <>
      <Container gap={0}>
        <Row>
          <Dropdown>
            <Dropdown.Button flat css={{ width: '100%' }}>
              {selectedProduct?.name || (
                <FormattedMessage defaultMessage="Select a product" />
              )}
            </Dropdown.Button>
            <Dropdown.Menu
              items={products || []}
              selectionMode="single"
              selectedKeys={selectedCode}
              css={{ $$dropdownMenuWidth: '300px' }}
              onSelectionChange={keys => setSelectedCode(keys as Set<string>)}
            >
              {(item: any) => (
                <Dropdown.Item key={item.code} description={item.description}>
                  {item.code}, {item.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Row>

        <Spacer y={0.5} />

        <Row>
          {product && (
            <Text small color="error">
              {product.message}
            </Text>
          )}
        </Row>
      </Container>
    </>
  )
}

export default ProductField
