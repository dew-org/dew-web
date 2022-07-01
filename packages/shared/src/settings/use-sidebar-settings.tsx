import { ArchiveIcon, PlusIcon, StackIcon } from '@radix-ui/react-icons'
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
          icon: <PlusIcon />,
        },
        {
          title: intl.formatMessage({ defaultMessage: 'Products' }),
          path: '/catalogue',
          icon: <ArchiveIcon />,
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: 'Customers' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register customer' }),
          path: '/customers/register',
          icon: <PlusIcon />,
        },
      ],
    },
    {
      title: intl.formatMessage({ defaultMessage: 'Billing' }),
      routes: [
        {
          title: intl.formatMessage({ defaultMessage: 'Register invoice' }),
          path: '/invoices/register',
          icon: <PlusIcon />,
        },
        {
          title: intl.formatMessage({ defaultMessage: 'Invoices' }),
          path: '/invoices',
          icon: <StackIcon />,
        },
      ],
    },
  ])

  return [routes]
}

export default useSidebarSettings
