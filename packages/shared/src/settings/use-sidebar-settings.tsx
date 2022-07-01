import { useState } from 'react'
import { AddUser, Filter, Paper, PaperPlus, Plus } from 'react-iconly'
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
          icon: <Plus />,
        },
        {
          title: intl.formatMessage({ defaultMessage: 'Products' }),
          path: '/catalogue',
          icon: <Filter />,
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: 'Customers' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register customer' }),
          path: '/customers/register',
          icon: <AddUser />,
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: 'Billing' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register invoice' }),
          path: '/invoices/register',
          icon: <PaperPlus />,
        },
        {
          title: intl.formatMessage({ defaultMessage: 'Invoices' }),
          path: '/invoices',
          icon: <Paper />,
        },
      ],
    },
  ])

  return [routes]
}

export default useSidebarSettings
