import Header from '@dew-org/layouts/header'
import { Container } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

const DefaultLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <Container md>{children}</Container>
    </>
  )
}

export default DefaultLayout
