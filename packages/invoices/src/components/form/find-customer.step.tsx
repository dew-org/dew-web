import {
  Customer,
  RegisterCustomerModal,
  useCustomer,
} from '@dew-org/customers'
import { Button, Grid, Input, Loading, Spacer, Text } from '@nextui-org/react'
import axios from 'axios'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'

type Props = {
  onSelect: (customer: Customer | null) => void
}

type StepFormValues = {
  customerId: string
}

const FindCustomerStep: FC<Props> = ({ onSelect }) => {
  const { register, handleSubmit } = useForm<StepFormValues>()

  const [customerId, setCustomerId] = useState<string | undefined>(undefined)
  const [customer, loadingCustomer, customerError] = useCustomer(customerId)

  const [registerModalOpen, setRegisterModalOpen] = useState(false)

  const handleCloseRegisterModal = () => {
    setRegisterModalOpen(false)
  }

  const handleSubmitRegisterModal = async (values: Customer) => {
    await axios.post('/api/customers', values)
    setRegisterModalOpen(false)
    setCustomerId(values.id)
  }

  useEffect(() => {
    if (customerError?.response?.status === 404) {
      setRegisterModalOpen(true)
    }
  }, [customerError])

  const onSubmit = (values: StepFormValues) => {
    setCustomerId(values.customerId)
  }

  return (
    <>
      <RegisterCustomerModal
        open={registerModalOpen}
        id={customerId}
        onSubmit={handleSubmitRegisterModal}
        onClose={handleCloseRegisterModal}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid.Container gap={1}>
          <Grid xs={12} md={8}>
            <Input
              width="100%"
              labelPlaceholder="Customer id"
              {...register('customerId', { required: true })}
            />
          </Grid>

          <Grid xs={12} md={4}>
            <Button type="submit">
              <FormattedMessage defaultMessage="Search" />
            </Button>
          </Grid>

          <Spacer y={1} />

          <Grid xs={12} justify="center">
            {loadingCustomer && <Loading>Loading customer</Loading>}
            {customerError && <div>{customerError.message}</div>}
            {customer && (
              <div>
                <Text h3>
                  {`${customer.id}, ${customer.name} ${customer.lastName}`}
                </Text>
                <Text>{customer.phoneNumber}</Text>
                <Text>{customer.email}</Text>

                <Spacer y={1} />

                <Button
                  color="success"
                  rounded
                  css={{ m: '0 auto' }}
                  onClick={() => onSelect(customer)}
                >
                  <FormattedMessage defaultMessage="Select" />
                </Button>
              </div>
            )}
          </Grid>
        </Grid.Container>
      </form>
    </>
  )
}

export default FindCustomerStep
