import { NavLinkProps } from '@dew-org/components/nav-link'
import { SidebarRoute } from '@dew-org/shared'
import { Button, Grid, Popover } from '@nextui-org/react'
import NextLink from 'next/link'
import { FC, HTMLAttributes } from 'react'

type Props = {
  routes?: SidebarRoute[]

  onPostClick?: (route: SidebarRoute) => void
}

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>

export type NavbarActionsProps = Props & NativeAttrs

const NavbarActions: FC<NavbarActionsProps> = ({ routes }) => {
  return (
    <>
      {routes?.map(({ path, title, routes }) => {
        if (routes) {
          return (
            <Grid>
              <Popover key={path}>
                <Popover.Trigger>
                  <Button size="sm" color="primary" flat>
                    {title}
                  </Button>
                </Popover.Trigger>
                <Popover.Content>
                  <Grid.Container
                    css={{
                      mw: '270px',
                      borderRadius: '$lg',
                      borderStyle: 'solid',
                      borderWidth: '$normal',
                      borderColor: '$gray300',
                      padding: '$sm',
                    }}
                  >
                    <NavbarActions routes={routes} />
                  </Grid.Container>
                </Popover.Content>
              </Popover>
            </Grid>
          )
        }

        const route = {
          href: path,
          title,
          pathname: path,
        } as NavLinkProps
        return (
          <Grid key={title} xs={12} direction="column">
            <NextLink href={route.href}>
              <Button light size="sm">
                {route.title}
              </Button>
            </NextLink>
          </Grid>
        )
      })}
    </>
  )
}

export default NavbarActions
