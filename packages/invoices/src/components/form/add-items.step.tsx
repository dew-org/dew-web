import { Product, ProductCard, useProducts } from '@dew-org/products'
import {
  Button,
  Container,
  Grid,
  Loading,
  Spacer,
  Text,
} from '@nextui-org/react'
import { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import { InvoiceItem } from '../../types'
import ItemCard from './item/card'
import InvoiceItemModal from './item/modal'

type Props = {
  onFinish: (items: InvoiceItem[]) => void
}

const AddItemsStep: FC<Props> = ({ onFinish }) => {
  const [products, loadingProducts, productsError] = useProducts()
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined,
  )
  const [open, setOpen] = useState(false)

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedProduct(undefined)
  }

  const [items, setItems] = useState<InvoiceItem[]>([])
  const handleSubmit = (item: InvoiceItem) => {
    setItems([...items, item])
    setOpen(false)
  }

  return (
    <>
      <InvoiceItemModal
        open={open}
        product={selectedProduct}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
      <Grid.Container gap={2}>
        <Grid xs={12} md={8}>
          {loadingProducts && <Loading />}
          {productsError && <div>{productsError.message}</div>}
          {products && (
            <Grid.Container gap={1} justify="center">
              <Grid xs={12} justify="center">
                <Text h4>
                  <FormattedMessage defaultMessage="Products" />
                </Text>
              </Grid>
              {products.map(product => (
                <Grid key={product.code}>
                  <ProductCard
                    product={product}
                    onClick={product => handleSelectProduct(product)}
                  />
                </Grid>
              ))}
            </Grid.Container>
          )}
        </Grid>

        <Grid xs={12} md={4} justify="center">
          <Container>
            <Text h4>
              <FormattedMessage defaultMessage="Items" />
            </Text>

            {items.map(item => (
              <ItemCard item={item} key={item.product.code} />
            ))}

            <Spacer y={1} />

            <Button
              onClick={() => onFinish(items)}
              disabled={items.length === 0}
              color="primary"
            >
              <FormattedMessage defaultMessage="Finish" />
            </Button>
          </Container>
        </Grid>
      </Grid.Container>
    </>
  )
}

export default AddItemsStep
