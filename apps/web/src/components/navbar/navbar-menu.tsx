import {
  StyledDropdownButton,
  StyledDropdownMenu,
} from '@dew-org/components/navbar/styles'
import { SidebarRoute } from '@dew-org/shared'
import { Dropdown, Navbar } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FC } from 'react'

type Props = {
  title: string
  routes: SidebarRoute[]
}

const NavbarMenu: FC<Props> = ({ routes, title }) => {
  const router = useRouter()

  return (
    <Dropdown isBordered>
      <Navbar.Item>
        <StyledDropdownButton auto light ripple={false}>
          {title}
        </StyledDropdownButton>
      </Navbar.Item>

      <StyledDropdownMenu onAction={path => router.push(path as string)}>
        {routes.map(subRoute => {
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

export default NavbarMenu
