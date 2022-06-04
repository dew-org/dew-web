import Navbar from '@dew-org/components/navbar'
import Header from '@dew-org/layouts/header'
import Progress from '@dew-org/layouts/progress'
import { Container } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

const DefaultLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <Progress />
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}

export default DefaultLayout
