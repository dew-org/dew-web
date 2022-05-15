import { Button, Popover, Text } from '@nextui-org/react'

const NavbarActions = () => {
  return (
    <Popover>
      <Popover.Trigger>
        <Button auto color="primary" flat>
          Catalogue
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text css={{ p: '$10' }}>This is the content of the popover.</Text>
      </Popover.Content>
    </Popover>
  )
}

export default NavbarActions
