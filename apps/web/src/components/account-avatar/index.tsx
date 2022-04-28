import { useUser } from '@auth0/nextjs-auth0'
import {
  Button,
  Divider,
  Grid,
  Loading,
  Popover,
  Row,
  Text,
  User,
} from '@nextui-org/react'
import NextLink from 'next/link'
import { Logout, Setting, User as UserIcon } from 'react-iconly'
import { FormattedMessage } from 'react-intl'

const AccountAvatar = () => {
  const { user, isLoading } = useUser()

  const content = (
    <Grid.Container
      css={{
        mw: '270px',
        borderRadius: '$lg',
        padding: '$sm',
      }}
    >
      <Grid xs={12} direction="column">
        <Text h4>{user?.name}&nbsp;</Text>
        <Text small>{user?.email}</Text>
      </Grid>

      <Divider y={1} />

      <Grid xs={12}>
        <Grid.Container gap={1}>
          <Grid xs={12} direction="column">
            <Button light icon={<UserIcon />} size="sm">
              <FormattedMessage defaultMessage="Profile" />
              <FormattedMessage defaultMessage="Heelo" />
            </Button>
          </Grid>

          <Grid xs={12} direction="column">
            <Button light icon={<Setting />} size="sm">
              <FormattedMessage defaultMessage="Settings" />
            </Button>
          </Grid>
        </Grid.Container>
      </Grid>

      <Divider y={1} />

      <Row justify="flex-end">
        <NextLink href="/api/auth/logout" passHref>
          <Button auto color="error" icon={<Logout />}>
            <FormattedMessage defaultMessage="Logout" />
          </Button>
        </NextLink>
      </Row>
    </Grid.Container>
  )

  return (
    <>
      {isLoading && <Loading />}

      {user && (
        <Popover placement="bottom-left">
          <Popover.Trigger>
            <User
              name={user.name}
              src={user.picture}
              pointer
              as="button"
              css={{
                px: 0,
                transition: 'opacity 0.25s ease',
                cursor: 'pointer',
                borderRadius: '$xs',
                background: 'none',
                border: 'none',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            />
          </Popover.Trigger>

          <Popover.Content css={{ px: '$4', py: '$2' }}>
            {content}
          </Popover.Content>
        </Popover>
      )}
    </>
  )
}

export default AccountAvatar
