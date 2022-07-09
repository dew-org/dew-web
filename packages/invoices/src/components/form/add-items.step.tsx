import { Button, Grid, Spacer, Text } from '@nextui-org/react'
import { FC, useState } from 'react'
import { FormattedMessage } from 'react-intl'

import { InvoiceItem } from '../../types'
import ItemCard from './item/card'
import InvoiceItemModal from './item/modal'

type Props = {
  onFinish: (items: InvoiceItem[]) => void

  currency: string
}

const AddItemsStep: FC<Props> = ({ onFinish, currency }) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const [items, setItems] = useState<InvoiceItem[]>([])

  const handleSubmit = (item: InvoiceItem) => {
    item.quantity = +item.quantity

    if (items.filter(i => i.product.code === item.product.code).length > 0) {
      setItems(
        items.map(i => (i.product.code === item.product.code ? item : i)),
      )
      setOpen(false)
      return
    }

    setItems([...items, item])
    setOpen(false)
  }

  const handleIncrease = (code: string) => {
    setItems(
      items.map(item =>
        item.product.code === code
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    )
  }

  const handleDecrease = (code: string) => {
    setItems(
      items.map(item =>
        item.product.code === code
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    )
  }

  const handleRemove = (code: string) => {
    setItems(items.filter(item => item.product.code !== code))
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <FormattedMessage defaultMessage="Add item" />
      </Button>

      <InvoiceItemModal
        open={open}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />

      <Spacer y={1} />

      <Text h3>
        <FormattedMessage defaultMessage="Items" />
      </Text>

      <Grid.Container gap={1}>
        {items.map(item => (
          <Grid xs={12} key={item.product.code}>
            <ItemCard
              key={item.product.code}
              item={item}
              currency={currency}
              onRemove={handleRemove}
              onDecrease={handleDecrease}
              onIncrease={handleIncrease}
            />
          </Grid>
        ))}
      </Grid.Container>

      <Spacer y={1} />

      <Button
        onClick={() => onFinish(items)}
        disabled={items.length === 0}
        color="primary"
      >
        <FormattedMessage defaultMessage="Finish" />
      </Button>
    </>
  )
}

export default AddItemsStep
