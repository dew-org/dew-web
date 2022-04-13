import AccountAvatar from '@dew-org/components/account-avatar'
import MenuToggle from '@dew-org/components/menu-toggle'
import Box from '@dew-org/components/primitives/box'
import ThemeToggle from '@dew-org/components/theme-toggle'
import { useMediaQuery } from '@dew-org/hooks/use-media-query'
import {
  StyledNavContainer,
  StyledNavMainContainer,
} from '@dew-org/layouts/styles'
import {
  Col,
  Container,
  Link,
  Row,
  Spacer,
  Text,
  useBodyScroll,
} from '@nextui-org/react'
import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

const MobileNavigation = dynamic(
  () => import('../../components/mobile-navigation'),
  {
    ssr: false,
  },
)

const DashboardNavbar = () => {
  const [expanded, setExpanded] = useState(false)
  const isMobile = useMediaQuery(960)
  const [, setBodyHidden] = useBodyScroll(null, { scrollLayer: true })

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false)
      setBodyHidden(false)
    }
  }, [isMobile])

  const onToggleNavigation = () => {
    setExpanded(!expanded)
    isMobile && setBodyHidden(!expanded)
  }

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

                <AccountAvatar />
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

            <Box
              className="navbar__menu-arrow noselect"
              onClick={onToggleNavigation}
              css={{
                height: '100%',
                minHeight: '40px',
                minWidth: '30px',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <MenuToggle expanded={expanded} />
            </Box>
          </Col>
          <MobileNavigation
            open={expanded}
            onClose={() => {
              setExpanded(false)
              setBodyHidden(false)
            }}
          />
        </Container>
      </StyledNavContainer>
    </StyledNavMainContainer>
  )
}

export default DashboardNavbar
