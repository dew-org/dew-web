import { useUser } from '@auth0/nextjs-auth0'
import AccountAvatar from '@dew-org/components/account-avatar'
import ThemeToggle from '@dew-org/components/theme-toggle'
import { useSidebarSettings } from '@dew-org/shared'
import {
  Button,
  Collapse,
  Dropdown,
  Loading,
  Navbar as NextUINavbar,
  Row,
  Spacer,
  StyledDropdownMenu,
  Text,
  useTheme,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FormattedMessage } from 'react-intl'

import NavbarBrand from './brand'
import { StyledDropdownButton } from './styles'

const Navbar = () => {
  const { isDark } = useTheme()
  const router = useRouter()

  const { user, isLoading } = useUser()
  const [routes] = useSidebarSettings()

  return (
    <NextUINavbar isBordered={isDark} variant="sticky">
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
        {routes.map(route => {
          if (route.routes) {
            return (
              <Dropdown isBordered key={route.title}>
                <NextUINavbar.Item>
                  <StyledDropdownButton auto light ripple={false}>
                    {route.title}
                  </StyledDropdownButton>
                </NextUINavbar.Item>

                <StyledDropdownMenu
                  onAction={path => router.push(path as string)}
                >
                  {route.routes.map(subRoute => {
                    return (
                      <Dropdown.Item
                        key={subRoute.path}
                        showFullDescription
                        description={subRoute.subtitle}
                        icon={subRoute.icon}
                      >
                        {subRoute.title}
                      </Dropdown.Item>
                    )
                  })}
                </StyledDropdownMenu>
              </Dropdown>
            )
          }

          return (
            <NextUINavbar.Link href={route.path} key={route.path}>
              {route.title}
            </NextUINavbar.Link>
          )
        })}
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
              <Collapse.Group key={route.path}>
                <Collapse title={route.title}>
                  {route.routes.map(subRoute => {
                    return (
                      <Row key={subRoute.path}>
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
            <NextUINavbar.CollapseItem key={route.path}>
              <NextLink href={route.path || '/'}>{route.title}</NextLink>
            </NextUINavbar.CollapseItem>
          )
        })}
      </NextUINavbar.Collapse>
    </NextUINavbar>
  )
}

export default Navbar
