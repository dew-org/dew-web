import { Dropdown, styled } from '@nextui-org/react'

export const StyledDropdownButton = styled(Dropdown.Button, {
  px: 0,
  dflex: 'center',
  svg: { pe: 'none' },
})

export const StyledDropdownMenu = styled(Dropdown.Menu, {
  $$dropdownMenuWidth: '340px',
  $$dropdownItemHeight: '70px',
  '& .nextui-dropdown-item': {
    py: '$4',
    // dropdown item left icon
    svg: {
      color: '$secondary',
      mr: '$4',
    },
    // dropdown item title
    '& .nextui-dropdown-item-content': {
      w: '100%',
      fontWeight: '$semibold',
    },
  },
})
