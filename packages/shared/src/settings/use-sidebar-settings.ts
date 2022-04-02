import { useState } from 'react'
import { useIntl } from 'react-intl'

import { SidebarRoute } from './types'

export const useSidebarSettings = (): [SidebarRoute[]] => {
  const intl = useIntl()

  const [routes] = useState<SidebarRoute[]>([
    {
      title: intl.formatMessage({ defaultMessage: 'Products' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register product' }),
          path: '/products/register',
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: 'Customers' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register customer' }),
          path: '/customers/register',
        },
      ],
    },
  ])

  return [routes]
}

export default useSidebarSettings
