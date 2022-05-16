import Navbar from '@dew-org/components/navbar'
import Header from '@dew-org/layouts/header'
import { Col, Container, Row } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div id="app-container">
      <Header />
      <Navbar />
      <Container
        lg
        as="main"
        className="dashboard__container"
        display="flex"
        css={{ position: 'relative' }}
      >
        <Row
          className="dashboard__content"
          gap={0}
          css={{
            '@lg': {
              pt: '1rem',
            },
          }}
        >
          <Col
            className="dashboard__center"
            css={{
              zIndex: '$10',
              maxWidth: '100%',
              pt: '$7',
              pb: '$10',
              '@xsMax': {
                p: 0,
              },
            }}
          >
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DashboardLayout
