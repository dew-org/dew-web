import { useUser } from '@auth0/nextjs-auth0'
import AccountAvatar from '@dew-org/components/account-avatar'
import NavbarMenu from '@dew-org/components/navbar/navbar-menu'
import SimpleLink from '@dew-org/components/navbar/simple-link'
import ThemeToggle from '@dew-org/components/theme-toggle'
import { useSidebarSettings } from '@dew-org/shared'
import {
  Button,
  Collapse,
  Loading,
  Navbar as NextUINavbar,
  Row,
  Spacer,
  Text,
  useTheme,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { FormattedMessage } from 'react-intl'

import NavbarBrand from './brand'

const Navbar = () => {
  const { isDark } = useTheme()

  const { user, isLoading } = useUser()
  const [routes] = useSidebarSettings()

  return (
    <NextUINavbar isBordered={isDark} variant="sticky" css={{ zIndex: 1000 }}>
      <NextUINavbar.Brand>
        <NextUINavbar.Toggle aria-label="toggle navigation" showIn="xs" />

        <Spacer x={0.4} />

        <NavbarBrand />
      </NextUINavbar.Brand>

      <NextUINavbar.Content
        enableCursorHighlight
        hideIn="xs"
        variant="underline"
      >
        {!isLoading && user && (
          <>
            {routes.map(route => {
              return route.routes ? (
                <NavbarMenu
                  key={route.id}
                  title={route.title}
                  routes={route.routes}
                />
              ) : (
                <SimpleLink
                  key={route.id}
                  path={route.path}
                  title={route.title}
                />
              )
            })}
          </>
        )}
      </NextUINavbar.Content>

      <NextUINavbar.Content
        css={{
          '@xs': {
            w: '12%',
            jc: 'flex-end',
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

        {isLoading && <Loading />}
        {!isLoading && user && <AccountAvatar />}
        {!isLoading && user === undefined && (
          <NextLink href="/api/auth/login" passHref>
            <Button
              auto
              flat
              size="sm"
              icon={<span className="material-symbols-rounded">login</span>}
              as="a"
            >
              <FormattedMessage defaultMessage="Sign In" />
            </Button>
          </NextLink>
        )}
      </NextUINavbar.Content>

      <NextUINavbar.Collapse>
        {routes.map(route => {
          if (route.routes) {
            return (
              <Collapse.Group key={route.id}>
                <Collapse title={route.title}>
                  {route.routes.map(subRoute => {
                    return (
                      <Row key={subRoute.id}>
                        <NextLink href={subRoute.path} key={subRoute.path}>
                          <Text>{subRoute.title}</Text>
                        </NextLink>
                      </Row>
                    )
                  })}
                </Collapse>
              </Collapse.Group>
            )
          }

          return (
            <NextUINavbar.CollapseItem key={route.id}>
              <NextLink href={route.path || '/'}>{route.title}</NextLink>
            </NextUINavbar.CollapseItem>
          )
        })}
      </NextUINavbar.Collapse>
    </NextUINavbar>
  )
}

export default Navbar
