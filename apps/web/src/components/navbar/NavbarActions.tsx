import { NavLinkProps } from '@dew-org/components/nav-link'
import { SidebarRoute } from '@dew-org/shared'
import { Dropdown, Spacer } from '@nextui-org/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FC, HTMLAttributes } from 'react'

type Props = {
  routes?: SidebarRoute[]

  onPostClick?: (route: SidebarRoute) => void
}

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>

export type NavbarActionsProps = Props & NativeAttrs

const NavbarActions: FC<NavbarActionsProps> = ({ routes }) => {
  const router = useRouter()

  return (
    <>
      {routes?.map(({ path, title, routes }) => {
        if (routes) {
          return (
            <>
              <Dropdown key={path}>
                <Dropdown.Button flat size="sm">
                  {title}
                </Dropdown.Button>

                <Dropdown.Menu
                  variant="light"
                  color="primary"
                  items={routes}
                  onAction={path => router.push(path as string)}
                >
                  {(item: SidebarRoute) => (
                    <Dropdown.Item
                      key={item.path}
                      description={item.subtitle}
                      icon={item.icon}
                    >
                      {item.title}
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>

              <Spacer x={0.2} />
            </>
          )
        }

        const route = {
          href: path,
          title,
          pathname: path,
        } as NavLinkProps
        return (
          <NextLink key={route.href} href={route.href}>
            {route.title}
          </NextLink>
        )
      })}
    </>
  )
}

export default NavbarActions
