import { NavLinkProps } from '@dew-org/components/nav-link'
import Category from '@dew-org/components/sidebar/category'
import Post from '@dew-org/components/sidebar/post'
import { useIsMobile } from '@dew-org/hooks/use-media-query'
import { SidebarRoute } from '@dew-org/shared'
import withDefaults from '@dew-org/utils/with-defaults'
import { motion } from 'framer-motion'
import { FC, HTMLAttributes } from 'react'

type Props = {
  routes?: SidebarRoute[]
  level?: number

  onPostClick?: (route: SidebarRoute) => void
}

const defaultProps: Props = {
  level: 1,
}

type NativeAttrs = Omit<HTMLAttributes<unknown>, keyof Props>

export type SidebarProps = Props & typeof defaultProps & NativeAttrs

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Sidebar: FC<SidebarProps> = ({ routes, level, onPostClick }) => {
  const isMobile = useIsMobile()
  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {routes?.map(({ path, title, routes }) => {
        if (routes) {
          return (
            <Category
              key={title}
              title={title}
              isMobile={isMobile}
              routes={routes}
            >
              <Sidebar
                key={title}
                routes={routes}
                level={level + 1}
                onPostClick={onPostClick}
              />
            </Category>
          )
        }

        const route = {
          href: path,
          title: title,
          pathname: path,
        } as NavLinkProps
        return (
          <Post
            key={title}
            isMobile={isMobile}
            level={level}
            route={route}
            onClick={() => onPostClick && onPostClick(route)}
          />
        )
      })}
    </motion.div>
  )
}

export default withDefaults(Sidebar, defaultProps)
