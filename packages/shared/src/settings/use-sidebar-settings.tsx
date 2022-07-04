import { useState } from 'react'
import { useIntl } from 'react-intl'

import { SidebarRoute } from './types'

export const useSidebarSettings = (): [SidebarRoute[]] => {
  const intl = useIntl()

  const [routes] = useState<SidebarRoute[]>([
    {
      title: intl.formatMessage({ defaultMessage: 'Catalogue' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register product' }),
          path: '/catalogue/register',
          icon: <span className="material-symbols-rounded">add_circle</span>,
        },
        {
          title: intl.formatMessage({ defaultMessage: 'Products' }),
          path: '/catalogue',
          icon: <span className="material-symbols-rounded">inventory_2</span>,
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: 'Customers' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register customer' }),
          path: '/customers/register',
          icon: <span className="material-symbols-rounded">add_circle</span>,
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: 'Billing' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register invoice' }),
          path: '/invoices/register',
          icon: <span className="material-symbols-rounded">add_circle</span>,
        },
        {
          title: intl.formatMessage({ defaultMessage: 'Invoices' }),
          path: '/invoices',
          icon: <span className="material-symbols-rounded">receipt</span>,
        },
      ],
    },
  ])

  return [routes]
}

export default useSidebarSettings
