import Sidebar from '@dew-org/components/sidebar'
import { useSidebarSettings } from '@dew-org/shared'
import withDefaults from '@dew-org/utils/with-defaults'
import { usePortal } from '@nextui-org/react'
import cn from 'classnames'
import { FC, memo } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  open: boolean

  onClose: () => void
}

const defaultProps = {
  open: false,
}

const MobileNavigation: FC<Props> = ({ open, onClose }) => {
  const portal = usePortal('mobile-navigation')
  const [settings] = useSidebarSettings()

  return portal
    ? createPortal(
        <nav
          className={cn('mobile-navigation__container', {
            open,
          })}
        >
          <div className="mobile-navigation__wrapper">
            <ul className="mobile-navigation__list">
              <li>
                <Sidebar routes={settings} onPostClick={onClose} />
              </li>
            </ul>
          </div>
          <style jsx>{`
            .mobile-navigation__container {
              position: fixed;
              top: 60px;
              z-index: 1001;
              right: 0;
              left: 0;
              bottom: 0;
              display: block;
              margin: 0;
              width: 100%;
              height: 0;
              transition: height 0.25s ease;
              will-change: height;
              overflow-y: scroll;
              overflow-x: hidden;
              user-select: none;
            }

            .mobile-navigation__wrapper {
              display: none;
              width: 100%;
              min-height: 100%;
              background: var(--nextui-colors-menuBackground);
              backdrop-filter: saturate(180%) blur(10px);
              --webkit-backdrop-filter: saturate(180%) blur(10px);
            }

            .mobile-navigation__list {
              margin: 0;
              padding: 16px 0 16px 16px;
            }

            .mobile-navigation__container.open {
              top: 63px;
              height: calc(100% - 64px);
            }

            .mobile-navigation__container.open.hasNotify {
              top: calc(63px + 40px);
            }

            .mobile-navigation__container.open.hasNotify:not(.detached) {
              padding-bottom: 30px;
            }

            .mobile-navigation__container.hasNotify.detached {
              top: 63px;
            }

            .mobile-navigation__container.open .mobile-navigation__wrapper {
              display: block;
            }
          `}</style>
        </nav>,
        portal,
      )
    : null
}

const MemoizedMobileNavigation = memo(MobileNavigation)

export default withDefaults(MemoizedMobileNavigation, defaultProps)
