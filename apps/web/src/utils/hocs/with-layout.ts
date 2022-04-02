import withDefaults from '@dew-org/utils/with-defaults'
import { ComponentType, PropsWithChildren } from 'react'

type WithLayoutProps = {
  Layout: ComponentType<PropsWithChildren<{}>>
}

const withLayout = <P>(component: ComponentType<P>, layout: ComponentType) => {
  return withDefaults<P, WithLayoutProps>(component, {
    Layout: layout,
  })
}

export default withLayout
