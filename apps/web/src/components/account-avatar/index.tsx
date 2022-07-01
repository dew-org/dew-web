import { useUser } from '@auth0/nextjs-auth0'
import { Dropdown, Loading, Text, User } from '@nextui-org/react'
import { ExitIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/router'
import { Key } from 'react'
import { FormattedMessage } from 'react-intl'

const AccountAvatar = () => {
  const { user, isLoading } = useUser()
  const router = useRouter()

  const handleAction = (key: Key) => {
    if (key === 'logout') {
      router.push('/api/auth/logout')
    }
  }

  return (
    <>
      {isLoading && <Loading />}

      {user && (
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <User
              name={user.name}
              src={user.picture}
              pointer
              size="sm"
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
          </Dropdown.Trigger>

          <Dropdown.Menu onAction={handleAction}>
            <Dropdown.Section
              title={<FormattedMessage defaultMessage="User info" />}
            >
              <Dropdown.Item
                key="profile-info"
                description={user.email}
                css={{ height: '$24' }}
              >
                <Text b color="inherit" css={{ d: 'flex' }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: 'flex' }}>
                  {user.name}
                </Text>
              </Dropdown.Item>
            </Dropdown.Section>

            <Dropdown.Section
              title={<FormattedMessage defaultMessage="Actions" />}
            >
              <Dropdown.Item key="profile" icon={<PersonIcon />}>
                <FormattedMessage defaultMessage="Profile" />
              </Dropdown.Item>

              <Dropdown.Item key="settings" icon={<GearIcon />}>
                <FormattedMessage defaultMessage="Settings" />
              </Dropdown.Item>

              <Dropdown.Item
                key="logout"
                color="error"
                icon={<ExitIcon />}
                withDivider
              >
                <FormattedMessage defaultMessage="Logout" />
              </Dropdown.Item>
            </Dropdown.Section>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </>
  )
}

export default AccountAvatar
