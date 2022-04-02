import { Container } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

const DefaultLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Container md>{children}</Container>
}

export default DefaultLayout
