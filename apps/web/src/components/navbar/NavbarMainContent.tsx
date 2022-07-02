import { useUser } from '@auth0/nextjs-auth0'
import AccountAvatar from '@dew-org/components/account-avatar'
import Badge from '@dew-org/components/badge'
import MenuToggle from '@dew-org/components/menu-toggle'
import MobileNavigation from '@dew-org/components/mobile-navigation'
import NavbarActions from '@dew-org/components/navbar/NavbarActions'
import Box from '@dew-org/components/primitives/box'
import ThemeToggle from '@dew-org/components/theme-toggle'
import { useMediaQuery } from '@dew-org/hooks/use-media-query'
import { useSidebarSettings } from '@dew-org/shared'
import {
  Button,
  Col,
  Link,
  Loading,
  Row,
  Spacer,
  Text,
  useBodyScroll,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { Login } from 'react-iconly'
import { FormattedMessage } from 'react-intl'

const NavbarMainContent = () => {
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

  const { user, isLoading } = useUser()

  const [routes] = useSidebarSettings()

  return (
    <>
      <Col
        className="navbar__logo-container"
        css={{
          '@mdMax': {
            width: '100%',
          },
        }}
      >
        <Row justify="flex-start" align="center">
          <NextLink href="/" passHref>
            <Link href="/">
              <Text h3>Dew</Text>
            </Link>
          </NextLink>
          <Spacer x={0.4} />
          <Badge
            css={{
              px: '$4',
              '@mdMax': {
                display: 'none',
              },
            }}
            type="secondary"
          >
            Beta
          </Badge>
        </Row>
      </Col>
      <Col
        className="navbar__resources-container"
        css={{ '@mdMax': { d: 'none' } }}
      >
        <Row align="center" justify="center">
          {isLoading && <Loading />}
          {!isLoading && user && <NavbarActions routes={routes} />}
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

            {isLoading && <Loading />}
            {!isLoading && user && <AccountAvatar />}
            {!isLoading && user === undefined && (
              <NextLink href="/api/auth/login" passHref>
                <Button auto flat size="sm" icon={<Login />} as="a">
                  <FormattedMessage defaultMessage="Sign In" />
                </Button>
              </NextLink>
            )}
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
        <ThemeToggle className="navbar__social-icon-mobile" css={{ m: '0' }} />

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

      {!isLoading && user && (
        <MobileNavigation
          open={expanded}
          onClose={() => {
            setExpanded(false)
            setBodyHidden(false)
          }}
        />
      )}
    </>
  )
}

export default NavbarMainContent
