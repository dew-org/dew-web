import Navbar from '@dew-org/components/navbar'
import Header from '@dew-org/layouts/header'
import Progress from '@dew-org/layouts/progress'
import { Container } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

const DefaultLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div id="app-container">
      <Header />
      <Progress />
      <Navbar />
      <Container
        alignContent="space-between"
        as="main"
        className="main-container"
        css={{
          position: 'relative',
          minHeight: '100vh',
          '@mdMax': {
            overflowX: 'hidden',
          },
        }}
        display="flex"
        id="main-container"
        lg={true}
      >
        {children}
      </Container>
    </div>
  )
}

export default DefaultLayout
