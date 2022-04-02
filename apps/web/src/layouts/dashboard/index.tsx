import Fixed from '@dew-org/components/fixed'
import Sidebar from '@dew-org/components/sidebar'
import DashboardNavbar from '@dew-org/layouts/dashboard/navbar'
import { useSidebarSettings } from '@dew-org/shared'
import { Col, Container, Row } from '@nextui-org/react'
import { FC, PropsWithChildren } from 'react'

const DashboardLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [settings] = useSidebarSettings()

  return (
    <div id="app-container">
      <DashboardNavbar />
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
            css={{
              width: '32%',
              display: 'none',
              '@md': {
                display: 'block',
              },
            }}
          >
            <Fixed
              offset={92}
              className="docs__left-sidebar"
              css={{
                maxHeight: 'calc(100vh - 4rem)',
                overflow: 'auto',
                zIndex: '$2',
                pb: '$28',
                '&::-webkit-scrollbar': {
                  width: '0px',
                },
              }}
            >
              <>{settings && <Sidebar routes={settings} />}</>
            </Fixed>
          </Col>
          <Col
            className="dashboard__center"
            css={{
              zIndex: '$10',
              maxWidth: '100%',
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
