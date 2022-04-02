import { NavLinkProps } from '@dew-org/components/nav-link'
import Category from '@dew-org/components/sidebar/category'
import Post from '@dew-org/components/sidebar/post'
import { SidebarRoute } from '@dew-org/shared'
import { FC, HTMLAttributes } from 'react'

type Props = {
  routes?: SidebarRoute[]
  level?: number
}

const defaultProps: Props = {
  level: 1,
}

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>

export type SidebarProps = Props & typeof defaultProps & NativeAttrs

const Sidebar: FC<SidebarProps> = ({ routes, level }) => {
  return (
    <>
      {routes?.map(({ path, title, routes }) => {
        if (routes) {
          return (
            <Category key={path} title={title} routes={routes}>
              <Sidebar key={path} routes={routes} level={level + 1} />
            </Category>
          )
        }

        const route = {
          href: path,
          title: title,
          pathname: path,
        } as NavLinkProps
        return <Post key={title} route={route} />
      })}
    </>
  )
}

export default Sidebar
