import { styled } from '@nextui-org/react'
import { useId, useState } from 'react'
import { useIntl } from 'react-intl'

import { SidebarRoute } from './types'

const StyledIcon = styled('span', {
  fontSize: '30px !important',
})

export const useSidebarSettings = (): [SidebarRoute[]] => {
  const intl = useIntl()

  const [routes] = useState<SidebarRoute[]>([
    {
      id: useId(),
      title: intl.formatMessage({ defaultMessage: 'Catalogue' }),
      routes: [
        {
          id: useId(),
          title: intl.formatMessage({ defaultMessage: 'Register product' }),
          path: '/catalogue/register',
          icon: (
            <StyledIcon className="material-symbols-rounded">
              add_circle
            </StyledIcon>
          ),
        },
        {
          id: useId(),
          title: intl.formatMessage({ defaultMessage: 'Products' }),
          path: '/catalogue',
          icon: (
            <StyledIcon className="material-symbols-rounded">
              inventory_2
            </StyledIcon>
          ),
        },
      ],
    },
    {
      id: useId(),
      title: intl.formatMessage({ defaultMessage: 'Customers' }),
      routes: [
        {
          id: useId(),
          title: intl.formatMessage({ defaultMessage: 'Register customer' }),
          path: '/customers/register',
          icon: (
            <StyledIcon className="material-symbols-rounded">
              add_circle
            </StyledIcon>
          ),
        },
      ],
    },
    {
      id: useId(),
      title: intl.formatMessage({ defaultMessage: 'Billing' }),
      routes: [
        {
          id: useId(),
          title: intl.formatMessage({ defaultMessage: 'Register invoice' }),
          path: '/invoices/register',
          icon: (
            <StyledIcon className="material-symbols-rounded">
              add_circle
            </StyledIcon>
          ),
        },
        {
          id: useId(),
          title: intl.formatMessage({ defaultMessage: 'Invoices' }),
          path: '/invoices',
          icon: (
            <StyledIcon className="material-symbols-rounded">
              receipt
            </StyledIcon>
          ),
        },
      ],
    },
  ])

  return [routes]
}

export default useSidebarSettings
