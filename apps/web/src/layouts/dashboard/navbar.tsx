import ThemeToggle from '@dew-org/components/theme-toggle'
import {
  StyledNavContainer,
  StyledNavMainContainer,
} from '@dew-org/layouts/styles'
import { Col, Container, Link, Row, Spacer, Text } from '@nextui-org/react'
import NextLink from 'next/link'

const DashboardNavbar = () => {
  return (
    <StyledNavMainContainer>
      <StyledNavContainer detached={true} showBlur={true}>
        <Container lg as="nav" display="flex" wrap="nowrap" alignItems="center">
          <Col
            className="navbar__logo-container"
            css={{
              '@mdMax': {
                width: '100%',
              },
            }}
          >
            <Row justify="flex-start" align="center">
              <NextLink href="/">
                <Link href="/">
                  <Text h3>Dew</Text>
                </Link>
              </NextLink>
            </Row>
          </Col>
          <Col className="navbar__search-container">
            <Row
              className="navbar__search-row"
              justify="flex-end"
              align="center"
              css={{
                position: 'initial',
                '@mdMax': {
                  jc: 'center',
                },
              }}
            >
              <Row
                className="navbar__social-icons-container"
                justify="flex-end"
                align="center"
                gap={1}
                css={{
                  width: 'initial',
                  '@mdMax': {
                    d: 'none',
                  },
                }}
              >
                <ThemeToggle
                  className="navbar__social-icon"
                  css={{
                    m: '0 6px',
                    '& svg': {
                      transition: '$default',
                    },
                    '&:hover': {
                      '& svg': {
                        opacity: 0.7,
                      },
                    },
                  }}
                />

                <Spacer x={1} />

                <>Accout</>
              </Row>
            </Row>
          </Col>
          <Col
            className="navbar__menu-container"
            css={{
              size: '100%',
              display: 'none',
              '@mdMax': {
                display: 'flex',
                justifyContent: 'flex-end',
              },
            }}
          >
            <ThemeToggle
              className="navbar__social-icon-mobile"
              css={{ m: '0' }}
            />
          </Col>
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  )
}

export default DashboardNavbar
